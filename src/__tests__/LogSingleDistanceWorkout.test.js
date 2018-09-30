import React from 'react';
import {render, cleanup, fireEvent, waitForElement} from 'react-testing-library';
import * as axios from "axios"
import MockAxios from 'axios-mock-adapter';
import 'jest-dom/extend-expect';
import LogSingleDistanceWorkout from "../components/LogSingleDistanceWorkout";

afterEach(cleanup);
const mock = new MockAxios(axios, {delayResponse: Math.random() * 500});

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

test(
  "Given a user who has a single distance workout to enter into the product\n" +
  "When the user enters the date, distance, time, split, stroke rate and heart rate of the workout\n" +
  "And hits the save button\n" +
  "Then the workout details should be saved for future use and the user should see a successful save message",
  async () => {
    mockSaveWorkoutApiCall();

    const {getByText, getByPlaceholderText} = render(<LogSingleDistanceWorkout/>);
    fillForm(getByPlaceholderText);
    const leftClick = {button: 0};
    fireEvent.click(getByText("Save"), leftClick);

    await waitForElement(() => getByText('Workout saved successfully!'));
});

function fillForm(getByPlaceholderText) {
  const date = getByPlaceholderText('dd/mm/yy');
  fillFormField(date, '2018-01-01');
  const distance = getByPlaceholderText('5000');
  fillFormField(distance, '5000');
  const timeHh = getByPlaceholderText('0');
  fillFormField(timeHh, '0');
  const timeMm = getByPlaceholderText('19');
  fillFormField(timeMm, '19');
  const timeSss = getByPlaceholderText('30.0');
  fillFormField(timeSss, '30.0');
  const splitMm = getByPlaceholderText('1');
  fillFormField(splitMm, '1');
  const splitSs = getByPlaceholderText('57.0');
  fillFormField(splitSs, '57.0');
  const strokeRate = getByPlaceholderText('22');
  fillFormField(strokeRate, '22');
  const heartRate = getByPlaceholderText('160');
  fillFormField(heartRate, '160');
}

function fillFormField(inputField, value) {
  inputField.value = value;
  fireEvent.change(inputField);
}

function mockSaveWorkoutApiCall() {
  const expectedRequestBody = {
    "date": "2018-01-01", "distance": "5000", "timeHh": "0", "timeMm": "19", "timeSss": "30.0", "splitMm": "1",
    "splitSss": "57.0", "strokeRate": "22", "heartRate": "160"
  };
  mock
    .onPost(process.env.REACT_APP_SAVE_WORKOUT_URL, expectedRequestBody)
    .reply(201);
}