import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import {render} from 'react-testing-library';

export function renderWithRouter(component) {
  return {
    ...render(<Router>{component}</Router>)
  }
}