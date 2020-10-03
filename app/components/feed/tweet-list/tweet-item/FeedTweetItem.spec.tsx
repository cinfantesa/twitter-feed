import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Tweet from '../../../../domain/Tweet';
import FeedTweetItem from "./FeedTweetItem";

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

test('FeedTweetItem should renders with message and current time', () => {
  act(() => {
    const tweet = new Tweet(null, 'Message');
    render(<FeedTweetItem tweet={tweet} />, container);
  });

  expect(container.querySelector('.MuiListItemText-secondary').textContent).toBe('Message');
  expect(container.querySelector('.MuiListItemText-primary').textContent).not.toBeNull();
});

test('FeedTweetItem should renders with empty message and given time', () => {
  act(() => {
    const tweet = new Tweet('2020-09-30T21:29:58.000Z', null);
    render(<FeedTweetItem tweet={tweet} />, container);
  });

  const expectedFormattedTime = '2020-9-30 at 23:29:58';

  expect(container.querySelector('.MuiListItemText-secondary')).toBeNull();
  expect(container.querySelector('.MuiListItemText-primary').textContent).toBe(expectedFormattedTime);
});
