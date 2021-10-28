import { firebaseApp, db } from "@services/firebaseApp";
import { AdMobRewarded } from "expo-ads-admob";

// "rewardedVideoDidDismiss" -> 사용자가 중간에 꺼도 이벤트 실행
// AdMobRewarded.addEventListener("rewardedVideoDidDismiss", ()=>console.log("test."))

/* 
const userEmail = firebaseApp.auth().currentUser?.email?.toString();
// console.log("email:", firebaseApp.auth().currentUser?.email); //email: sy@sy.com
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
// console.log(year, month, day) // 2021 9 21
const userTodayRef = db
  .collection("users")
  .doc(userEmail)
  .collection("logs")
  .doc(`${year}-${month}`)
  .collection("date")
  .doc(`${year}-${month}-${day}`);
const pointRef = db.collection("points").doc(userEmail);
*/

const showTestMessage = (email: string) => {
  // userTodayRef.onSnapshot(snapshot => console.log("watched_AD_counts:", snapshot.data()));
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // console.log("email prop:", email);
  // db.collection("users")
  //   .doc(email)
  //   .collection("logs")
  //   .doc(`${year}-${month}`)
  //   .collection("date")
  //   // .doc(`${year}-${month}-${day}`)
  //   .doc("2021-9-19")
  //   .get()
  //   .then(doc => console.log("test:", doc.data()));
};

export const initRewardAds = async (email: string): Promise<void> => {
  // test Id
  try {
    await AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917");
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
    AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", () => showTestMessage(email));
  } catch (error) {
    console.error(error);
  }
};
