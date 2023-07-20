import React, { useState } from "react";
import ExpensesScreen from "./ExpensesScreen";
import { useSelector } from "react-redux";
import { Expense, ExpensesStateStore } from "../utils/types";
import { fetchExpenses } from "../utils/http";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/expenses-slice";

const RecentExpenses = () => {
  const dispatch = useDispatch();

  const expenses = useSelector(
    (state: ExpensesStateStore) => state.expenseSection.expenses
  );

  React.useEffect(() => {
    const sendRequest = async () => {
      const fetchedExpenses: Expense[] = await fetchExpenses();

      dispatch(expenseActions.setExepenses({ expenses: fetchedExpenses }));
    };
    sendRequest();
  }, []);

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
