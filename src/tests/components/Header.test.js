import React from "React";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Header from "../../components/Header";

test("Should render Header correctly.", () => {
  const wrapper = shallow(<Header />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
