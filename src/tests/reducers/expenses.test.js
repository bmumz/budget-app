import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set default state.", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });

  expect(state).toEqual([]);
});

test("Should remove expense by ID", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense if ID is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const expense = {
    id: "4",
    description: "Coffee",
    note: "",
    amount: 395,
    createdAt: 0,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

test("Should edit an expense by ID", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);

  expect(state[1].amount).toBe(amount);
});

test("Should not edit an expense if no matching ID", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});
