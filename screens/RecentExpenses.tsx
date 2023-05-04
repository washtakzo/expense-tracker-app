import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Expense from "../components/Expense";
import { DUMMY_EXPENSES } from "../utils/dummy-data";

const RecentExpenses = () => {
  return (
    <View>
      {DUMMY_EXPENSES.map(({ title, date, amount }) => (
        <Expense title={title} date={date} amount={amount} />
      ))}
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
