import React from 'react';

import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

type TweetItemProps = {
  createdAt: string,
  message: string
}

const FeedTweetItem = ({ createdAt, message }: TweetItemProps) =>
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar>
        <PersonIcon/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={createdAt} secondary={message} />
  </ListItem>;

export default FeedTweetItem;
