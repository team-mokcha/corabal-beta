import { AdMobRewarded } from "expo-ads-admob";

export const initRewardAds = async (): Promise<void> => {
  // test Id
  try {
    await AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917");
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();
  } catch (error) {
    console.error(error);
  }
};
