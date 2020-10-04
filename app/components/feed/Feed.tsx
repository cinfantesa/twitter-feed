import React, { useReducer } from 'react';
import Box from '@material-ui/core/Box';
import FeedSearch from './search/FeedSearch';
import FeedTweetList from './tweet-list/FeedTweetList';
import styles from './Feed.css';
import { initialState, tweetsReducer } from '../../reducers';
import { loadTweets } from '../../actions/index';

const Feed = () => {
  const [state, dispatch] = useReducer(tweetsReducer, initialState);
  const { username, tweets }  = state;

  const handleUserNameChanged = event => dispatch({ type: 'changeUsername', payload: event.target.value});

  const handleFind = () => {
    dispatch({ type: 'clearTweets' });
    loadTweets(dispatch, username);
  };

  return (
    <Box className={styles.feedBox}>
      <h1>Check your last tweets</h1>
      <FeedSearch
        handleClick={handleFind}
        handleUserNameChanged={handleUserNameChanged} />
      <FeedTweetList tweets={tweets} />
    </Box>
  );
}

export default Feed;
