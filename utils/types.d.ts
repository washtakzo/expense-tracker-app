export type Expense = {
  id: string;
  title: string;
  date: string;
  amount: string;
};

export type ExpensesStateStore = {
  expenseSection: { expenses: Expense[] };
};
