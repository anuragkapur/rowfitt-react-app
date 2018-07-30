import React from 'react';
import NavBar from "../components/NavBar";
import {render, fireEvent, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

test("navigation elements - Dashboard, LogNewWorkout, ViewTrainingLogs are displayed", () => {
  const {getByText, container} = render(
    <NavBar/>
  );

  expect(getByText("Dashboard")).toBeInTheDocument();
  expect(getByText("Log New Workout")).toBeInTheDocument();
  expect(getByText("View Training Log")).toBeInTheDocument();
  expect(container.firstChild).toMatchSnapshot();
});

test("clicking on / link displays Dashboard page", () => {
  const {getByText, container} = render(
    <NavBar/>
  );
  const leftClick = {button: 0};
  fireEvent.click(getByText("Dashboard"), leftClick);
  expect(container.innerHTML).toMatch("This is the dashboard");
});

test("clicking on /log-new-workout link displays LogNewWorkout page", () => {
  const {getByText, container} = render(
    <NavBar/>
  );
  const leftClick = {button: 0};
  fireEvent.click(getByText("Log New Workout"), leftClick);
  expect(container.innerHTML).toMatch("Log a New Workout");
});

test("clicking on /view-training-log link displays ViewTrainingLog page", () => {
  const {getByText, container} = render(
    <NavBar/>
  );
  const leftClick = {button: 0};
  fireEvent.click(getByText("View Training Log"), leftClick);
  expect(container.innerHTML).toMatch("My Training Log");
});