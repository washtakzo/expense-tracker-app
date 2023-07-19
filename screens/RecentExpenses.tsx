import React, { useState } from "react";
import ExpensesScreen from "./ExpensesScreen";
import { useSelector } from "react-redux";
import { Expense, ExpensesStateStore } from "../utils/types";
import { fetchExpenses } from "../utils/http";

const RecentExpenses = () => {
  // const expenses = useSelector(
  //   (state: ExpensesStateStore) => state.expenseSection.expenses
  // );

  const [fetchedExpenses, setFetchedExpenses] = useState<Expense[]>([]);

  React.useEffect(() => {
    const sendRequest = async () => {
      const expenses: Expense[] = await fetchExpenses();

      setFetchedExpenses(expenses);
    };
    sendRequest();
  }, []);

  const last7DaysExpenses = fetchedExpenses.filter((expense) => {
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
