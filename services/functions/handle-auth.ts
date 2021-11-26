import { firebaseApp, db } from "@services/firebaseApp";

// 1. DB 모델 생성 > Auth 로직 재확인
// (기왕이면 password 왜 특수문자 2개 입력해야 하는지도 고치자)
// 2) Coffee Log 생성 (update로)

// 1) promise로 유저 객체 생성 > 에러 분리 v
// 2) DB에서 모델 만들기 > 에러 분리

export async function createCredential(email: string, password: string): Promise<any> {
  try {
    const credential = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
    return [credential, null];
  } catch (error) {
    return [null, error];
  }
}

export async function createUserCollection(
  email: string,
  acceptTerms: boolean,
  timestamp: Date
): Promise<any> {
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1;
  const day = timestamp.getDate();

  try {
    const batch = db.batch();

    const userCollectionRef = db.collection("users").doc(email);
    batch.set(userCollectionRef, {
      active: true,
      email: email,
      nickname: "",
      accept_terms: acceptTerms,
      cat_status: "normal",
      goal: 1,
      total_cups: 0,
      cup_current_wearing: 0,
      cup_owned: [0],
      cup_can_buy: [
        { 1: true },
        { 2: true },
        { 3: true },
        { 4: true },
        { 5: true },
        { 6: true },
        { 7: true },
        { 8: true },
        { 9: true }
      ]
    });

    const monthCollectionRef = userCollectionRef.collection("logs").doc(`${year}-${month}`);
    batch.set(monthCollectionRef, {
      is_succeed_counts: 0,
      is_recorded_counts: 0,
      summed_up_cups: 0,
      summed_up_shots: 0,
      summed_up_milk: 0,
      summed_up_syrup: 0,
      summed_up_cream: 0
    });

    const dateCollectionRef = monthCollectionRef.collection("date").doc(`${year}-${month}-${day}`);
    batch.set(dateCollectionRef, {
      is_succeed: false,
      is_recorded: {
        is_zero_cup: false,
        is_normal_cup: false,
        timestamp: ""
      },
      normal_cup_record: [],
      watched_AD_counts: 0
    });

    const pointCollectionRef = db.collection("points").doc(email);
    batch.set(pointCollectionRef, {
      current: 10,
      total_gain: { bonus: 10, watched_ADs: 0, normal_cup_records: 0, zero_cup_records: 0 },
      total_used: { calling_cat: 0, buying_cup: 0 }
    });

    const response = await batch.commit();
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}

export async function setNickname(email: string, nickname: string): Promise<any> {
  try {
    const userCollectionRef = db.collection("users").doc(email);
    const response = await userCollectionRef.update({ nickname: nickname });
    return [response, null];
  } catch (error) {
    return [null, error];
  }
}

export async function logInWithFirebase(email: string, password: string): Promise<any> {
  try {
    const loggedInUser = await firebaseApp.auth().signInWithEmailAndPassword(email, password);
    return [loggedInUser, null];
  } catch (error) {
    return [null, error];
  }
}

export async function logOutWithFirebase(): Promise<void> {
  try {
    await firebaseApp.auth().signOut();
  } catch (error) {
    console.log(error);
  }
}

export async function sendPasswordRestEmail(email: string): Promise<void> {
  try {
    await firebaseApp.auth().sendPasswordResetEmail(email);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAccountOnFirebase(): Promise<void> {
  try {
    const user = firebaseApp.auth().currentUser;
    await user?.delete();
  } catch (error) {
    console.log(error);
  }
}
