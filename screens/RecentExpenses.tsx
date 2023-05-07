import React from "react";
import ExpensesScreen from "./ExpensesScreen";
import { useSelector } from "react-redux";
import { ExpensesStateStore } from "../utils/types";

const RecentExpenses = () => {
  const expenses = useSelector(
    (state: ExpensesStateStore) => state.expenseSection.expenses
  );

  const last7DaysExpenses = expenses.filter((expense) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const date7DaysAgo = new Date(currentYear, currentMonth, currentDay - 7);

    const expenseDate = new Date(expense.date);

    return expenseDate > date7DaysAgo;
  });

  return (
    <ExpensesScreen totalTitle="Last 7 Days" expenses={last7DaysExpenses} />
  );
};

export default RecentExpenses;
