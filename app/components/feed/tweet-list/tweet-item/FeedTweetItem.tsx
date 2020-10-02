import React from 'react';

import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

type TweetItemProps = {
  name: string,
  message: string
}

const FeedTweetItem = ({ name, message }: TweetItemProps) =>
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar>
        <PersonIcon/>
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={name} secondary={message} />
  </ListItem>;

export default FeedTweetItem;
