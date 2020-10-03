import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Tweet from '../../../domain/Tweet';
import FeedTweetList from "./FeedTweetList";

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

test('FeedTweetList should render error message when no tweets', () => {
  act(() => {
    const tweets = null;
    render(<FeedTweetList tweets={tweets} />, container);
  });

  expect(container.querySelector('p').textContent).toBe('No results found, check your username');
});


test('FeedTweetList should render empty list', () => {
  act(() => {
    const tweets = [];
    render(<FeedTweetList tweets={tweets} />, container);
  });

  console.log(container.outerHTML)
  expect(container.querySelector('.feedTweetItem')).toBeNull();
});

test('FeedTweetList should render list', () => {
  act(() => {
    const tweets = [new Tweet('2020-09-30T21:29:58.000Z', 'Message')];
    render(<FeedTweetList tweets={tweets} />, container);
  });

  expect(container.querySelector('.feedTweetItem')).toBe(1);
});
