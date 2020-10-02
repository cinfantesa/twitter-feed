import React from 'react';
import Container from '@material-ui/core/Container';
import FeedSearch from './search/FeedSearch';
import FeedTweetList from './tweet-list/FeedTweetList';

const tweets = [
  { name: 'Account Name', message: 'Tweet 1' },
  { name: 'Account Name', message: 'Tweet 2' },
  { name: 'Account Name', message: 'Tweet 3' }
];

const Feed = (): JSX.Element =>
  <Container fixed>
    <h1>Check your last tweets</h1>
    <FeedSearch></FeedSearch>
    <FeedTweetList tweets={tweets}></FeedTweetList>
  </Container>;

export default Feed;
