import firebase from "firebase";
import { db } from "@services/firebaseApp";
import "react-native-get-random-values";
import { v1 as uuidv1 } from "uuid";

const RESPONSE_TEXT = {
  success: "succeed",
  fail: "failed"
};

//
// 0. General
//

// 0-1) main에서 '오늘'의 커피 기록 상태를 파악하는 함수
export async function getTodayCupLogs(email: string, timestamp: Date): Promise<any> {
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

//
// 1. Normal Coffee Record
//

// 1-1) main의 '플로팅' 버튼 & main의 '수정'의 '+' 버튼으로 개별 Coffee Log 생성 - 5잔 제한 보안 규칙에 추가되어야 함
// 보안 규칙 - 필드 업데이트 시 5잔 제한, is_succeed : false, is_recorded : {is_zero_cup: false, is_normal_cup: false, timestamp: ""}
export async function addTodayNormalCupLog(
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
        normal_cup_record: [{ id: uuidv1(), shot: shot, base: base, option: option }]
      });
    }
    const response = await batch.commit();
    return [RESPONSE_TEXT.success, response];
  } catch (error) {
    return [RESPONSE_TEXT.fail, error];
  }
}

// 1-2) main의 '수정'의 'x' 버튼으로 개별 커피 기록 삭제
// 보안 규칙 - 필드 업데이트 시 0잔 이상이어야 함, is_succeed : false, is_recorded : {is_zero_cup: false, is_normal_cup: false, timestamp: ""}
export async function updateTodayNormalCupLog(
  email: string,
  timestamp: Date,
  coffeeRecord: { id: string; shot: number; base: string; option?: string[] }
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
        normal_cup_record: firebase.firestore.FieldValue.arrayRemove(coffeeRecord)
      });
    } else {
      throw new Error("No data to update");
    }
    const response = await batch.commit();
    return [RESPONSE_TEXT.success, response];
  } catch (error) {
    return [RESPONSE_TEXT.fail, error];
  }
}

// 1-3) main의 '기록 완료' 버튼으로 오늘 커피 기록 Normal로 마감
// >> 포인트(+10), 유저 프로필의 기록(+1), 이번 달 기록(+1)
// >> 이번 달 : 잔(+n), 샷(+n), 우유(+n), 시럽(+n), 크림(+n)
export async function endTodayNormalCupRecord(
  email: string,
  timestamp: Date,
  summedUpCoffeeRecord: {
    cups: number;
    shots: number;
    milk: number;
    syrup: number;
    cream: number;
  }
): Promise<any> {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();

  const batch = db.batch();

  try {
    const pointCollectionRef = db.collection("points").doc(email);
    batch.update(pointCollectionRef, {
      current: firebase.firestore.FieldValue.increment(10),
      "total_gain.normal_cup_records": firebase.firestore.FieldValue.increment(10)
    });

    const userDocumentationRef = db.collection("users").doc(email);
    batch.update(userDocumentationRef, { total_cups: firebase.firestore.FieldValue.increment(1) });

    const yearAndMonthDocumentationRef = userDocumentationRef
      .collection("logs")
      .doc(`${year}-${month}`);

    const yearAndMonthDoc = await yearAndMonthDocumentationRef.get();
    if (yearAndMonthDoc.exists) {
      batch.update(yearAndMonthDocumentationRef, {
        is_succeed_counts: firebase.firestore.FieldValue.increment(1),
        is_recorded_counts: firebase.firestore.FieldValue.increment(1),
        summed_up_cups: firebase.firestore.FieldValue.increment(summedUpCoffeeRecord.cups),
        summed_up_shots: firebase.firestore.FieldValue.increment(summedUpCoffeeRecord.shots),
        summed_up_milk: firebase.firestore.FieldValue.increment(summedUpCoffeeRecord.milk),
        summed_up_syrup: firebase.firestore.FieldValue.increment(summedUpCoffeeRecord.syrup),
        summed_up_cream: firebase.firestore.FieldValue.increment(summedUpCoffeeRecord.cream)
      });
    } else {
      batch.set(yearAndMonthDocumentationRef, {
        is_succeed_counts: 1,
        is_recorded_counts: 1,
        summed_up_cups: summedUpCoffeeRecord.cups,
        summed_up_shots: summedUpCoffeeRecord.shots,
        summed_up_milk: summedUpCoffeeRecord.milk,
        summed_up_syrup: summedUpCoffeeRecord.syrup,
        summed_up_cream: summedUpCoffeeRecord.cream
      });
    }

    const dateDocumentationRef = yearAndMonthDocumentationRef
      .collection("date")
      .doc(`${year}-${month}-${day}`);
    const dateDoc = await dateDocumentationRef.get();
    if (dateDoc.exists) {
      batch.update(dateDocumentationRef, {
        is_succeed: true,
        "is_recorded.is_zero_cup": false,
        "is_recorded.is_normal_cup": true,
        "is_recorded.timestamp": timestamp
      });
    } else {
      throw new Error("No coffee record today");
    }
    const response = await batch.commit();
    return [RESPONSE_TEXT.success, response];
  } catch (error) {
    return [RESPONSE_TEXT.fail, error];
  }
}

//
// 2. Zero Coffee Record
//

// 2-1. '오늘 0잔 기록' 버튼으로 Log 생성 & 오늘의 기록 마감
export async function endTodayZeroCupRecord(email: string, timestamp: Date): Promise<any> {
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

    const yearAndMonthDoc = await yearAndMonthDocumentationRef.get();
    if (yearAndMonthDoc.exists) {
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
