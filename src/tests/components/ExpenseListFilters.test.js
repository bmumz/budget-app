import React from "react";
import { shallow } from "enzyme";
import { filters, altFilters } from "../fixtures/filters";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { DateRangePicker } from "react-dates";
import moment from "moment";

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("Should render ExpenseListFilters correctly.", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseListFilters with dummy data.", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

//should handle text change (spies)
test("Should handle text change", () => {
  const value = "coffee";

  wrapper.find("input").simulate("change", {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

//should sort by date
test("Should handle sort by date", () => {
  const value = "date";

  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

// should sort by amount
test("Should handle sort by amount", () => {
  const value = "amount";

  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

// should handle date changes
test("Should handle date changes.", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");

  wrapper.find(DateRangePicker).prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// should handle date focus changes (state)
test("Should handle focus change", () => {
  const focused = "endDate";

  wrapper.find(DateRangePicker).prop("onFocusChange")(focused);
  expect(wrapper.state("calendarFocused")).toEqual(focused);
});
