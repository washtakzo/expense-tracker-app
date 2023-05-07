import { configureStore } from "@reduxjs/toolkit";

import { expenseReducer } from "./expenses-slice";

export const store = configureStore({
  reducer: {
    expenseSection: expenseReducer,
  },
});
