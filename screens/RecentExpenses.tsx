import React from "react";
import ExpensesScreen from "./ExpensesScreen";
import { DUMMY_EXPENSES } from "../utils/dummy-data";

const RecentExpenses = () => {
  return <ExpensesScreen totalTitle="Last 7 Days" expenses={DUMMY_EXPENSES} />;
};

export default RecentExpenses;
