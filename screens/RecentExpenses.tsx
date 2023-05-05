import React from "react";
import ExpensesScreen from "./ExpensesScreen";
import { DUMMY_EXPENSES } from "../utils/dummy-data";

const RecentExpenses = () => {
  const last7DaysExpenses = DUMMY_EXPENSES.filter((expense) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const date7DaysAgo = new Date(currentYear, currentMonth, currentDay - 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesScreen totalTitle="Last 7 Days" expenses={last7DaysExpenses} />
  );
};

export default RecentExpenses;
