import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "../utils/types";
import { DUMMY_EXPENSES } from "../utils/dummy-data";

type SliceData = {
  expenses: Expense[];
};

const initialState: SliceData = {
  expenses: DUMMY_EXPENSES,
};

const expensesSlice = createSlice({
  name: "expenses_slice",
  initialState,
  reducers: {
    addExpenses(state, action: PayloadAction<{ newExpense: Expense }>) {
      state.expenses = [action.payload.newExpense, ...state.expenses];
    },
    removeExpense(state, action: PayloadAction<{ expenseId: string }>) {
      const newExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.expenseId
      );
      state.expenses = newExpenses;
    },
    updateExpense(
      state,
      action: PayloadAction<{
        expenseId: string;
        expenseTitle: string;
        expenseAmount: string;
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

export const expenseReducer = expensesSlice.reducer;
export const expenseActions = expensesSlice.actions;
