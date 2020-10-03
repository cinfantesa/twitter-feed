import React from 'react';

import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

import styles from './FeedTweetItem.css';

const FeedTweetItem = ({ createdAt, message }) =>
  <ListItem className={styles.feedTweetItem}>
    <ListItemAvatar>
      <Avatar>
        <TwitterIcon/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={createdAt} secondary={message} />
  </ListItem>;

export default FeedTweetItem;
