import { Expense } from "./types";

export const BASE_URL =
  "https://expense-tracker-9f566-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expense: Expense) {
  await fetch(BASE_URL + "/expenses.json", {
    method: "POST",
    body: JSON.stringify(expense),
    headers: { "Content-Type": "application/json" },
  });
}

export async function fetchExpenses() {
  const response = await fetch(BASE_URL + "/expenses.json");
  const data: any[] = await response.json();

  const expenses = [];

  console.log({ data });

  for (const key in data) {
    const expenseObj = {
      id: key,
      amount: data[key].amount,
      date: data[key].date,
      title: data[key].title,
    };

    expenses.push(expenseObj);
  }

  console.log({ expenses });

  return expenses;
}
