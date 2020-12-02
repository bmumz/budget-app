import React from "react";
import { shallow } from "enzyme";
import { ExpenseList } from "../../components/ExpenseList";
import expenses from "../fixtures/expenses";
import toJson from "enzyme-to-json";

test("Should render expense list with expenses.", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

test("Should render expense list with empty message.", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
