import React from "react";
import renderer from "react-test-renderer";


import ItunesSearch  from "../ItunesSearch";

it("tests the ItuneSearch component", () => {
  const tree = renderer.create(<ItunesSearch/>).toJSON();
  expect(tree).toMatchSnapshot();
});