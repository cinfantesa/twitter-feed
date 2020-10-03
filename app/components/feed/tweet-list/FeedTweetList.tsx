import React from 'react';
import { List } from '@material-ui/core';
import FeedTweetItem from './tweet-item/FeedTweetItem';

import styles from './FeedTweetList.css';


const FeedTweetList = ({ tweets }) => {
  if (!tweets) {
    return (<p>No results found, check your username</p>);
  }

  const renderedTweets = tweets.map(tweet => <FeedTweetItem tweet={tweet} key={tweet.formmattedCreatedAt} />);

  return (
    <List className={styles.feedList}>
      { renderedTweets }
    </List>
  );
};

export default FeedTweetList;
