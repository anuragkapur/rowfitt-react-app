import React from 'react';
import {cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import LogNewWorkout from "../components/LogNewWorkout";
import {renderWithRouter} from "./TestUtils";

afterEach(cleanup);

test("LogNewWorkout page renders buttons to log all workout types", () => {
  const {getByText, container} = renderWithRouter(<LogNewWorkout/>);
  expect(getByText('Single Distance')).toBeInTheDocument();
  expect(getByText('Single Time')).toBeInTheDocument();
  expect(getByText('Fixed Distance Intervals')).toBeInTheDocument();
  expect(getByText('Fixed Time Intervals')).toBeInTheDocument();
  expect(getByText('Variable Distance Intervals')).toBeInTheDocument();
  expect(getByText('Variable Time Intervals')).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});