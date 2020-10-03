import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import FeedSearch from './search/FeedSearch';
import FeedTweetList from './tweet-list/FeedTweetList';
import axios from 'axios';

import styles from './Feed.css';

const apiUrl = 'https://api.twitter.com/2/tweets/search/recent?max_results=100&tweet.fields=author_id,created_at,public_metrics,referenced_tweets,text';
const token = 'AAAAAAAAAAAAAAAAAAAAABi9IAEAAAAA5TYXrEn09cmwjn5WVcB4A8V0zHE%3DjvBXrFsNx34h7GzjKH3m1xHzPXfJmpuRw6Jc3Gahx4OtDLjl66';

const Feed = (): JSX.Element =>{
  const [username, setUsername] = useState('alejandro_such');
  const [tweets, setTweets] = useState([]);

  const handleUserNameChanged = event => setUsername(event.target.value);

  const handleFind = () => {
    axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
      params: { query: `from:${username}` }
    })
      .then(result => {
        const parsedResult = result.data.data.map(it => { return { createdAt: it.created_at, message: it.text }});
        setTweets(parsedResult);
      });
  };


  return (
    <Box className={styles.feedBox}>
      <h1>Check your last 100 tweets</h1>
      <FeedSearch handleClick={handleFind} handleUserNameChanged={handleUserNameChanged} />
      <FeedTweetList tweets={tweets} />
    </Box>
  );
}

export default Feed;
