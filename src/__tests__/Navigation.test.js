import React from 'react';
import Navigation from "../components/Navigation";
import {render, fireEvent, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

test("navigation elements - Dashboard, LogNewWorkout, ViewTrainingLogs are displayed", () => {
  const {getByText, container} = render(
    <Navigation/>
  );

  expect(getByText("Dashboard")).toBeInTheDocument();
  expect(getByText("Log New Workout")).toBeInTheDocument();
  expect(getByText("View Training Log")).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});

test("clicking on / link displays Dashboard page", () => {
  const {getByText, container} = render(
    <Navigation/>
  );
  const leftClick = {button: 0};
  fireEvent.click(getByText("Dashboard"), leftClick);
  expect(container.innerHTML).toMatch("This is the dashboard");
});

test("clicking on /log-new-workout link displays LogNewWorkout page", () => {
  const {getByText, container} = render(
    <Navigation/>
  );
  const leftClick = {button: 0};
  fireEvent.click(getByText("Log New Workout"), leftClick);
  expect(container.innerHTML).toMatch("Log a New Workout");
});

test("clicking on /view-training-log link displays ViewTrainingLog page", () => {
  const {getByText, container} = render(
    <Navigation/>
  );
  const leftClick = {button: 0};
  fireEvent.click(getByText("View Training Log"), leftClick);
  expect(container.innerHTML).toMatch("My Training Log");
});

test("navigation from top nav to 'Log New Workout' link to 'Single Distance' link takes user to " +
  "LogSingleDistanceWorkout page", () => {
  const {getByText, container} = render(<Navigation/>);
  const leftClick = {button: 0};
  fireEvent.click(getByText("Log New Workout"), leftClick);
  fireEvent.click(getByText("Single Distance"), leftClick);
  expect(getByText("Log Single Distance Workout")).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});