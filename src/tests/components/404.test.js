import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import NotFound from "../../components/404";

test("Should render 404 page.", () => {
  const wrapper = shallow(<NotFound />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
