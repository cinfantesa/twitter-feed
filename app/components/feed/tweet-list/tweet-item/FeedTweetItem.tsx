import React from 'react';

import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

import styles from './FeedTweetItem.css';

const FeedTweetItem = ({ tweet }) => {
  return <ListItem className={styles.feedTweetItem}>
    <ListItemAvatar>
      <Avatar>
        <TwitterIcon/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={tweet.formmattedCreatedAt} secondary={tweet.message}/>
  </ListItem>
};


export default FeedTweetItem;
