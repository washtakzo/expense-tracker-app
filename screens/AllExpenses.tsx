import React from "react";
import { DUMMY_EXPENSES } from "../utils/dummy-data";

import ExpensesScreen from "./ExpensesScreen";

const AllExpenses = () => {
  return <ExpensesScreen totalTitle="Total" expenses={DUMMY_EXPENSES} />;
};

export default AllExpenses;
