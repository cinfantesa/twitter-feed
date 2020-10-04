import axios from 'axios';
import Tweet from '../domain/Tweet';

const apiUrl = 'https://api.twitter.com/2/tweets/search/recent?max_results=100&tweet.fields=author_id,created_at,public_metrics,referenced_tweets,text';
const token = 'AAAAAAAAAAAAAAAAAAAAABi9IAEAAAAA5TYXrEn09cmwjn5WVcB4A8V0zHE%3DjvBXrFsNx34h7GzjKH3m1xHzPXfJmpuRw6Jc3Gahx4OtDLjl66';

const loadTweets = async (dispatch, username) => {
  try {
    const result = await axios.get(apiUrl, {
      headers: { Authorization: `Bearer ${token}` },
      params: { query: `from:${username}` }
    });
    const parsedResult = result.data.data.map(it => {
      const { created_at, text } = it;
      return new Tweet(created_at, text);
    });
    dispatch({ type: 'loadTweets', payload: parsedResult });
  } catch (error) {
    dispatch({ type: 'errorLoadingTweets' });
  }
};

export { loadTweets };
