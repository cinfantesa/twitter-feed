import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import FeedSearch from './FeedSearch';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('FeedSearch should call handleClick method', () => {
  const handleClick = jest.fn();
  act(() => {
    render(<FeedSearch handleClick={handleClick} />, container);
  });

  const button = container.querySelector('.MuiButton-containedPrimary');

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(handleClick).toHaveBeenCalled();
});

test('FeedSearch should call handleUserNameChanged method', () => {
  const handleOnChange = jest.fn();
  act(() => {
    render(<FeedSearch handleUserNameChanged={handleOnChange} />, container);
  });

  const input = container.querySelector('#search');

  act(() => {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
    setter.call(input, 'changed value');

    input.dispatchEvent(new Event('input', { bubbles: true }));
  });

  expect(handleOnChange).toHaveBeenCalled();
});

