export type Expense = {
  id: string;
  title: string;
  date: string;
  amount: string;
};

export type ExpensesStateStore = {
  expenseSection: { expenses: Expense[] };
};

//FIXME:fix type issue - https://reactnavigation.org/docs/typescript/#annotating-usenavigation
export type Navigation = {
  navigate: (properties: { name: string; params?: any }) => void;
  goBack: () => void;
};
