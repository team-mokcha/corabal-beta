import firebase from "firebase";
import { db } from "@services/firebaseApp";
import "react-native-get-random-values";
import { v1 as uuidv1 } from "uuid";

const RESPONSE_TEXT = {
  success: "succeed",
  fail: "failed"
};

// 0. main에서 '오늘'의 커피 기록 상태를 파악하는 함수
export async function getCupRecord(email: string, timestamp: Date): Promise<any> {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();

  try {
    const dateDocumentationRef = db
      .collection("users")
      .doc(email)
      .collection("logs")
      .doc(`${year}-${month}`)
      .collection("date")
      .doc(`${year}-${month}-${day}`);

    const doc = await dateDocumentationRef.get();
    if (doc.exists) {
      const data = doc.data();
      return [RESPONSE_TEXT.success, data];
    } else {
      return [RESPONSE_TEXT.success, "No record Today."];
    }
  } catch (error) {
    return [RESPONSE_TEXT.fail, error];
  }
}

// 1. main의 플로팅 버튼으로 기록 생성 - 5잔 제한 보안 규칙에 추가되어야 함
export async function addNormalCupLog(
  email: string,
  shot: number,
  base: string,
  option: string[],
  timestamp: Date
): Promise<any> {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();

  const batch = db.batch();

  try {
    const dateDocumentationRef = db
      .collection("users")
      .doc(email)
      .collection("logs")
      .doc(`${year}-${month}`)
      .collection("date")
      .doc(`${year}-${month}-${day}`);

    const doc = await dateDocumentationRef.get();
    if (doc.exists) {
      batch.update(dateDocumentationRef, {
        is_succeed: false,
        "is_recorded.is_zero_cup": false,
        "is_recorded.is_normal_cup": false,
        normal_cup_record: firebase.firestore.FieldValue.arrayUnion({
          id: uuidv1(),
          shot: shot,
          base: base,
          option: option
        })
      });
    } else {
      batch.set(dateDocumentationRef, {
        is_succeed: false,
        is_recorded: {
          is_zero_cup: false,
          is_normal_cup: false,
          timestamp: ""
        },
        normal_cup_record: [{ shot: shot, base: base, option: option }]
      });
    }
    const response = await batch.commit();
    return [RESPONSE_TEXT.success, response];
  } catch (error) {
    return [RESPONSE_TEXT.fail, error];
  }
}

// 2. '오늘 0잔 기록' 버튼으로 Log 생성 & 오늘의 기록 마감
export async function addZeroCupRecord(email: string, timestamp: Date): Promise<any> {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();

  const batch = db.batch();

  try {
    const pointCollectionRef = db.collection("points").doc(email);
    batch.update(pointCollectionRef, {
      current: firebase.firestore.FieldValue.increment(20),
      "total_gain.zero_cup_records": firebase.firestore.FieldValue.increment(20)
    });

    const userDocumentationRef = db.collection("users").doc(email);
    batch.update(userDocumentationRef, { total_cups: firebase.firestore.FieldValue.increment(1) });

    const yearAndMonthDocumentationRef = userDocumentationRef
      .collection("logs")
      .doc(`${year}-${month}`);

    const yearAndMonthDoc = yearAndMonthDocumentationRef.get();
    if ((await yearAndMonthDoc).exists) {
      batch.update(yearAndMonthDocumentationRef, {
        is_succeed_counts: firebase.firestore.FieldValue.increment(1),
        is_recorded_counts: firebase.firestore.FieldValue.increment(1)
      });
    } else {
      batch.set(yearAndMonthDocumentationRef, {
        is_succeed_counts: 1,
        is_recorded_counts: 1
      });
    }

    const dateDocumentationRef = yearAndMonthDocumentationRef
      .collection("date")
      .doc(`${year}-${month}-${day}`);
    const dateDoc = await dateDocumentationRef.get();
    if (dateDoc.exists) {
      batch.update(dateDocumentationRef, {
        is_succeed: true,
        "is_recorded.is_zero_cup": true,
        "is_recorded.is_normal_cup": false,
        "is_recorded.timestamp": timestamp,
        normal_cup_record: []
      });
    } else {
      batch.set(dateDocumentationRef, {
        is_succeed: true,
        is_recorded: {
          is_zero_cup: true,
          is_normal_cup: false,
          timestamp: timestamp
        },
        normal_cup_record: []
      });
    }
    const response = await batch.commit();
    return [RESPONSE_TEXT.success, response];
  } catch (error) {
    return [RESPONSE_TEXT.fail, error];
  }
}

// 3. 오늘 커피 기록 수정 - UX 상, 정확히는 수정이 아니고 개별 커피 기록 삭제

// 4. 오늘 커피 마감 - 잔, 샷, 우유, 시럽, 크림 계산해서 DB 올리기
