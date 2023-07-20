import React, { useState } from "react";
import ExpensesScreen from "./ExpensesScreen";
import { useSelector } from "react-redux";
import { Expense, ExpensesStateStore } from "../utils/types";
import { fetchExpenses } from "../utils/http";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/expenses-slice";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpenses = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();

  const dispatch = useDispatch();

  const expenses = useSelector(
    (state: ExpensesStateStore) => state.expenseSection.expenses
  );

  React.useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);

      try {
        const fetchedExpenses: Expense[] = await fetchExpenses();
        dispatch(expenseActions.setExpenses({ expenses: fetchedExpenses }));
      } catch (error) {
        setError("Could not fetch expenses");
      }

      setIsLoading(false);
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

  if (!isLoading && error) {
    return <ErrorOverlay message={error} onConfirm={() => setError(null)} />;
  }

  return (
    <ExpensesScreen totalTitle="Last 7 Days" expenses={last7DaysExpenses} />
  );
};

export default RecentExpenses;
