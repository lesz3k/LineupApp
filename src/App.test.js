import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LineUp from './json/lineup.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('null', () => {
  const n = LineUp;
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).toBeTruthy();
  expect(n).not.toBeFalsy();
});
