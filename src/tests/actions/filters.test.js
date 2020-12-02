import moment from "moment";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

test("Should generate set start date action object.", () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("Should generate set end date action object.", () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("Should set up sorting by date action object.", () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("Should set up sorting by amount action object.", () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("Should generate set text filter action object with provided values.", () => {
  const text = "Something in.";
  const action = setTextFilter(text);

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("Should generate set text filter action object with default values.", () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
