import React from 'react';

import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const FeedTweetItem = ({ createdAt, message }) =>
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar>
        <PersonIcon/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={createdAt} secondary={message} />
  </ListItem>;

export default FeedTweetItem;
