import { Expense, FirebaseExpense } from "./types";

export const BASE_URL =
  "https://expense-tracker-9f566-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expense: FirebaseExpense) {
  const addedExpenseId = await fetch(BASE_URL + "/expenses.json", {
    method: "POST",
    body: JSON.stringify(expense),
    headers: { "Content-Type": "application/json" },
  });

  return addedExpenseId; //TODO:a tester
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

export function updateExpense(id: string, expense: FirebaseExpense) {
  return fetch(BASE_URL + `/expenses/${id}.json`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify(expense),
  });
}

export function deleteExpense(id: string) {
  return fetch(BASE_URL + `/expenses/${id}.json`, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
  });
}
