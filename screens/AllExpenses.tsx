import React from "react";
import { useSelector } from "react-redux";
import { ExpensesStateStore } from "../utils/types";

import ExpensesScreen from "./ExpensesScreen";

const AllExpenses = () => {
  const expenses = useSelector(
    (state: ExpensesStateStore) => state.expenseSection.expenses
  );
  return <ExpensesScreen totalTitle="Total" expenses={expenses} />;
};

export default AllExpenses;
