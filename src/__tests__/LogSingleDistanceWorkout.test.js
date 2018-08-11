import React from 'react';
import {render, cleanup} from 'react-testing-library';
import 'jest-dom/extend-expect';
import LogSingleDistanceWorkout from "../components/LogSingleDistanceWorkout";

afterEach(cleanup);

test(
  "When the user opens the 'Log Single Distance Workout' page; " +
  "Then the user should see a page where the date, distance, time, split, stroke rate and heart rate of the workout can " +
  "be entered.", () => {

  const {getByText, getByLabelText, getByPlaceholderText, queryAllByText} = render(<LogSingleDistanceWorkout/>);
  expect(getByText('Single Distance Workout')).toBeInTheDocument();
  expect(getByLabelText('Date')).toBeInTheDocument();
  expect(getByPlaceholderText('dd/mm/yy')).toBeInTheDocument();
  expect(getByLabelText('Distance')).toBeInTheDocument();
  expect(getByPlaceholderText('5000')).toBeInTheDocument();
  expect(getByText('meters')).toBeInTheDocument();
  expect(getByLabelText('Time')).toBeInTheDocument();
  expect(getByPlaceholderText('0')).toBeInTheDocument();
  expect(getByText('hh')).toBeInTheDocument();
  expect(getByPlaceholderText('19')).toBeInTheDocument();
  expect(getByText('mm')).toBeInTheDocument();
  expect(getByPlaceholderText('30.0')).toBeInTheDocument();
  expect(getByText('ss.s')).toBeInTheDocument();
  expect(getByLabelText('Split')).toBeInTheDocument();
  expect(getByPlaceholderText('1')).toBeInTheDocument();
  expect(queryAllByText('mm')).toHaveLength(2);
  expect(getByPlaceholderText('57.0')).toBeInTheDocument();
  expect(queryAllByText('ss.s')).toHaveLength(2);
  expect(getByLabelText('Stroke Rate')).toBeInTheDocument();
  expect(getByPlaceholderText('22')).toBeInTheDocument();
  expect(getByText('spm')).toBeInTheDocument();
  expect(getByLabelText('Heart Rate')).toBeInTheDocument();
  expect(getByPlaceholderText('160')).toBeInTheDocument();
  expect(getByText('bpm')).toBeInTheDocument();
  expect(getByText('Save')).toBeInTheDocument();
});