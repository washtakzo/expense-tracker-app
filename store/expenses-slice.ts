import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "../utils/types";

type SliceData = {
  expenses: Expense[];
};

const initialState: SliceData = {
  expenses: [],
};

const expensesSlice = createSlice({
  name: "expenses_slice",
  initialState,
  reducers: {
    addExpenses(state, action: PayloadAction<{ newExpense: Expense }>) {
      state.expenses = [action.payload.newExpense, ...state.expenses];
    },
    removeExpense(state, action: PayloadAction<{ expenseId: number }>) {
      const newExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.expenseId
      );
      state.expenses = newExpenses;
    },
    editExpense(
      state,
      action: PayloadAction<{
        expenseId: number;
        expenseTitle: string;
        expenseAmount: number;
      }>
    ) {
      state.expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.expenseId) {
          return {
            ...expense,
            title: action.payload.expenseTitle,
            amount: action.payload.expenseAmount,
          };
        }
        return expense;
      });
    },
  },
});