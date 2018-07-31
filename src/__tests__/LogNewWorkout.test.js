import React from 'react';
import {fireEvent, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import LogNewWorkout from "../components/LogNewWorkout";
import {renderWithRouter} from "../components/TestUtils";

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

test("Clicking on Single Distance workout type takes user to new page to enter Single Distance workout details", () => {
  const {getByText, container} = renderWithRouter(<LogNewWorkout/>);
  const leftClick = {button: 0};
  fireEvent.click(getByText("Single Distance"), leftClick);
  expect(container.innerHTML).toMatch("Log Single Distance Workout");
});