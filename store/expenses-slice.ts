import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Expense, FirebaseExpense } from "../utils/types";
import { storeExpense } from "../utils/http";

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
    addExpense(state, action: PayloadAction<{ newExpense: Expense }>) {
      state.expenses = [action.payload.newExpense, ...state.expenses];
    },
    setExpenses(state, action: PayloadAction<{ expenses: Expense[] }>) {
      //state.expenses = action.payload.expenses.reverse(); si on veut les afficher du plus recent au moins recent
      //Car à cause de firebase on les fetch de plus ancien au plus récent.
      state.expenses = action.payload.expenses;
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
