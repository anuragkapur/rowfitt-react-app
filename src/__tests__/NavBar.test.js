import React from 'react';
import {render} from 'react-testing-library';
import 'jest-dom/extend-expect';
import NavBar from "../components/NavBar";

test("", () => {
  const {getByText} = render (
    <NavBar/>
  );

  expect(getByText("Dashboard")).toBeInTheDocument();
});