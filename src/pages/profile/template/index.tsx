import React, { ReactElement } from "react";
import { View } from "react-native";
import { Header } from "@Components";
import { AccountInfo } from "../../../components/organisms/profile/accountInfo";
import { TotalRecord } from "../../../components/organisms/profile/totalRecord";
import { AccountControl } from "../../../components/organisms/profile/accountControl";
import styles from "./profile.style";

// 차후 로직 설정 시 추가해줄 필요
// 1) 닉네임(설정 함수도 함께), 이메일
// 2) 기록, 포인트, 고양이 상태(positive, negative)
// 3) 광고보기, 고양이 부르기 함수,
// 4) 비밀번호 재설정, 로그아웃, 계정 삭제 함수

type TemplateProps = {
  nickname: string;
  email: string;
  setNickname: () => void;
  totalRecords: number;
  totalPoints: number;
  myCupStatus: string;
  callADs: () => void;
  callCat: () => void;
  resetPassword: () => void;
  logout: () => void;
  deleteAccount: () => void;
};

// export default function Template({ props }: TemplateProps): ReactElement {
export default function Template(): ReactElement {
  return (
    <View style={styles.profileContainer}>
      <Header back={true} close={false} />
      <View style={styles.profileOrganismsWrapper}>
        <AccountInfo nickname="커라밸" email="coffeeout@gmail.com" />
        <TotalRecord records={48} points={50} catStatus="bad" />
        <AccountControl />
      </View>
    </View>
  );
}
