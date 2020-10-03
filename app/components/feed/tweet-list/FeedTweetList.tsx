import React from 'react';
import { List } from '@material-ui/core';
import FeedTweetItem from './tweet-item/FeedTweetItem';

import styles from './FeedTweetList.css';

const FeedTweetList = ({ tweets }) => {
  const renderedTweets = tweets.map(tweet => <FeedTweetItem {...tweet} key={tweet.createdAt} />);
  return (
    <List className={styles.feedList}>
      { renderedTweets }
    </List>
  );
};

export default FeedTweetList;
