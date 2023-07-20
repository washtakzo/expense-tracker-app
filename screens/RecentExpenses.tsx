import React, { useState } from "react";
import ExpensesScreen from "./ExpensesScreen";
import { useSelector } from "react-redux";
import { Expense, ExpensesStateStore } from "../utils/types";
import { fetchExpenses } from "../utils/http";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/expenses-slice";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const RecentExpenses = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const expenses = useSelector(
    (state: ExpensesStateStore) => state.expenseSection.expenses
  );

  React.useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);

      const fetchedExpenses: Expense[] = await fetchExpenses();

      setIsLoading(false);

      dispatch(expenseActions.setExpenses({ expenses: fetchedExpenses }));
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

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <ExpensesScreen totalTitle="Last 7 Days" expenses={last7DaysExpenses} />
  );
};

export default RecentExpenses;
