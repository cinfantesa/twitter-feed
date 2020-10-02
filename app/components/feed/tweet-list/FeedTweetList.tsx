import React from 'react';
import { List } from '@material-ui/core';
import FeedTweetItem from './tweet-item/FeedTweetItem';

const FeedTweetList = ({ tweets }) => {
  const renderedTweets = tweets.map(tweet => <FeedTweetItem {...tweet} key={tweet.createdAt} />);
  return (
    <List>
      { renderedTweets }
    </List>
  );
};

export default FeedTweetList;
