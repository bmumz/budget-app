import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("Should ensure default values are set up correctly.", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("Should set sort by to amount.", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("Should set sort by to date.", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("Should set text filter.", () => {
  const text = "This is my filter";

  const action = {
    type: "SET_TEXT_FILTER",
    text,
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("Should set startDate filter", () => {
  const startDate = moment(0);

  const action = {
    type: "SET_START_DATE",
    startDate,
  };

  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test("Should set endDate filter", () => {
  const endDate = moment(0);

  const action = {
    type: "SET_END_DATE",
    endDate,
  };

  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});
