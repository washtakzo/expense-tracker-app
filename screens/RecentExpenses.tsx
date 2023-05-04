import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Expense from "../components/Expense";
import { DUMMY_EXPENSES } from "../utils/dummy-data";
import { themeColors } from "../utils/colors";
import Total from "../components/Total";

const RecentExpenses = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.totalContainer}>
        <Total title="Total" amount="$25.65" />
      </View>
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
  totalContainer: {
    marginTop: deviceWidth / 24,
    marginHorizontal: deviceWidth / 24,
  },
});
