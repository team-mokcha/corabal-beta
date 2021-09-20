import firebase from "firebase";
import { db } from "./firebaseApp";

// DB에서 포인트 가져오기

const pointRef = db.collection("points");

// export const test = pointRef.doc("sy@sy.com").onSnapshot(snapshot => console.log("snapshot:", snapshot.data()));

// get 쓰면, 업데이트 됐을 때 실시간으로 반영 X, onSnapshot은 DB 바뀌면 바로 console.log 다시 찍어주면서 실시간 반영 ok.
// export const getTest = pointRef.doc("sy@sy.com").get().then(snapshot => console.log("get:", snapshot.data()));

// undefined
export const getPoint = async (email: string): Promise<any> => {
  // const querySnapshot = pointRef.doc(email).onSnapshot(snapshot => {
  //   const data = snapshot.data();
  //   return data?.current;
  // })
  // return querySnapshot;

  pointRef.doc(email).onSnapshot(snapshot => {
    return snapshot.data()?.current;
  });
};
