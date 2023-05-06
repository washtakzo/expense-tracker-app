export type Expense = {
  id: number;
  title: string;
  date: Date;
  amount: number;
};

export type ExpensesStateStore = {
  expenseSection: { expenses: Expense[] };
};
