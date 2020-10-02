import React from 'react';
import { List } from '@material-ui/core';
import FeedTweetItem from './tweet-item/FeedTweetItem';

type Tweet = {
  name: string,
  message: string
};

type TweetListProps = {
  tweets: Array<Tweet>
}

const FeedTweetList = ({ tweets }: TweetListProps) => {
  const renderedTweets = tweets.map(tweet => <FeedTweetItem {...tweet} key={tweet.message} />);

  return (
    <List>
      { renderedTweets }
    </List>
  );
};

export default FeedTweetList;
