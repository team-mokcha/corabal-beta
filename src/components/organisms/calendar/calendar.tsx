import React, { ReactElement } from "react";
import { View, Image } from "react-native";
import { Calendar as RNCalendar, LocaleConfig } from "react-native-calendars";
import { KR_MONTH_NAMES, KR_DAY_NAMES } from "./date_constants";
import Text from "../../atoms/text/text";
import styles from "./calendar.styles";

const CALENDAR_TEXT = {
  zeroCupIndex: "0잔",
  normalCupsIndex: "1잔 이상"
};

LocaleConfig.locales["KoreanCalendar"] = {
  monthNames: KR_MONTH_NAMES,
  monthNamesShort: KR_MONTH_NAMES,
  dayNames: KR_DAY_NAMES,
  dayNamesShort: KR_DAY_NAMES,
  today: "오늘"
};
LocaleConfig.defaultLocale = "KoreanCalendar";

export default function Calendar(): ReactElement {
  const ArrowLeft = () => {
    return (
      <Image
        style={styles.monthArrowLeft}
        source={require("@assets/others/calendar-arrow-left.png")}
      />
    );
  };
  const ArrowRight = () => {
    return (
      <Image
        style={styles.monthArrowRight}
        source={require("@assets/others/calendar-arrow-right.png")}
      />
    );
  };

  const CustomHeader = (props: Record<string, Date>) => {
    return (
      <Text weight="400" style={styles.customHeader}>
        {props.date.getMonth() + 1 + "월"}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <RNCalendar
        style={{ paddingLeft: 27, paddingRight: 25 }}
        theme={{
          todayTextColor: "#76B5FF",
          textDayFontFamily: "NotoSansKR_400Regular",
          textMonthFontFamily: "NotoSansKR_400Regular",
          textDayHeaderFontFamily: "NotoSansKR_400Regular",
          textSectionTitleColor: "#000000",
          textDayHeaderFontSize: 14,
          textDayFontSize: 14,
          dayTextColor: "#000000"
        }}
        enableSwipeMonths={true}
        hideExtraDays={true}
        renderArrow={direction => (direction === "left" ? <ArrowLeft /> : <ArrowRight />)}
        renderHeader={date => <CustomHeader date={date} />}
        headerStyle={{ justifyContent: "center" }}
        onDayPress={day => {
          console.log("selected day", day);
        }}
        markingType="multi-period"
        markedDates={{
          "2022-01-14": {
            periods: [{ startingDay: true, endingDay: false, color: "#76B5FF" }]
          },
          "2022-01-15": {
            periods: [{ startingDay: false, endingDay: true, color: "#76B5FF" }]
          },
          "2022-01-17": {
            periods: [{ startingDay: true, endingDay: false, color: "#8E6655" }]
          },
          "2022-01-18": {
            periods: [{ startingDay: false, endingDay: false, color: "#8E6655" }]
          },
          "2022-01-19": {
            periods: [{ startingDay: false, endingDay: true, color: "#8E6655" }]
          }
        }}
      />
      <View style={styles.indexContainer}>
        <View style={[styles.indexIcon, styles.indexIconZero]} />
        <Text weight="400" style={styles.indexIconText}>
          {CALENDAR_TEXT.zeroCupIndex}
        </Text>
        <View style={[styles.indexIcon, styles.indexIconMoreThanOne]} />
        <Text weight="400" style={styles.indexIconText}>
          {CALENDAR_TEXT.normalCupsIndex}
        </Text>
      </View>
    </View>
  );
}
