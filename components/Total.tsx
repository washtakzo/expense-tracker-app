import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { themeColors } from "../utils/colors";

type Props = {
  title: string;
  amount: string;
};

const Total = ({ title, amount }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
};

export default Total;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: deviceWidth / 42,
    backgroundColor: themeColors.secondaryLight,
    borderRadius: deviceWidth / 72,
  },
  title: {
    color: themeColors.primaryDark,
    fontSize: deviceWidth / 24,
  },
  amount: {
    color: themeColors.primaryDark,
    fontWeight: "bold",
    fontSize: deviceWidth / 22,
  },
});
