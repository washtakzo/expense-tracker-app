import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React from "react";
import { themeColors } from "../utils/colors";

type Props = {
  id: string;
  title: string;
  date: string;
  amount: string;
  onPress?: () => void;
};

const Expense = ({ id, title, date, amount, onPress }: Props) => {
  const dateArray = date.split("-");
  const year = dateArray[0];
  let month = dateArray[1];
  let day = dateArray[2];

  month = month.length > 1 ? month : "0" + month;
  day = day.length > 1 ? day : "0" + day;

  const formatedDate = `${year}-${month}-${day}`;

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
