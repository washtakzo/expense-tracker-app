import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React from "react";
import { themeColors } from "../utils/colors";

type Props = {
  title: string;
  date: Date;
  amount: number;
  onPress?: () => void;
};

const Expense = ({ title, date, amount, onPress }: Props) => {
  const month = date.getMonth() + 1;
  const formatedMonth = month >= 10 ? month : "0" + month;

  const day = date.getDate();
  const formatedDay = day >= 10 ? day : "0" + day;

  const formatedDate =
    date.getFullYear() + "-" + formatedMonth + "-" + formatedDay;

  return (
    <Pressable style={styles.expense} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{formatedDate}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </Pressable>
  );
};

export default Expense;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  expense: {
    backgroundColor: themeColors.secondaryDark,
    borderRadius: deviceWidth / 62,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: deviceWidth / 24,
  },
  textContainer: {},
  amountContainer: {
    backgroundColor: themeColors.textOnSecondary,
    width: "22%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: deviceWidth / 72,
  },
  title: {
    color: themeColors.textOnSecondary,
    fontWeight: "bold",
    fontSize: deviceWidth / 24,
  },
  date: {
    color: themeColors.textOnSecondary,
    fontSize: deviceWidth / 26,
  },
  amount: {
    fontWeight: "bold",
    color: themeColors.primaryDark,
  },
});
