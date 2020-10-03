import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import FeedTweetItem from './FeedTweetItem';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('render with or without tweet', () => {
  act(() => {
    render(<FeedTweetItem/>, container);
  });
  expect(container.textContent).toBe('');

  act(() => {
    render(<FeedTweetItem {createdAt: 'createdAt', message: 'message'}/>, container);
  });
  expect(container.textContent).toBe('');
});
