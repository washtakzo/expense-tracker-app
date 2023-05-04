import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Expense from "../components/Expense";
import { DUMMY_EXPENSES } from "../utils/dummy-data";
import { themeColors } from "../utils/colors";

const RecentExpenses = () => {
  return (
    <View style={styles.screen}>
      {DUMMY_EXPENSES.map(({ title, date, amount }) => (
        <View style={styles.expenseContainer}>
          <Expense title={title} date={date} amount={amount} />
        </View>
      ))}
    </View>
  );
};

export default RecentExpenses;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: themeColors.primaryDark,
  },
  expenseContainer: {
    paddingHorizontal: deviceWidth / 24,
    paddingVertical: deviceWidth / 56,
  },
});
