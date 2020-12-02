import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Dashboard from "../../components/Dashboard";

test("Should correctly render dashboard component.", () => {
  const wrapper = shallow(<Dashboard />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
