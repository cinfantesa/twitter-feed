const tweetsReducer = (state, action) => {
  switch (action.type) {
    case 'changeUsername':
      return {...state, username: action.payload};
    case 'loadTweets':
      return {...state, tweets: [...action.payload]};
    case 'errorLoadingTweets':
      return {...state, tweets: null };
    case 'clearTweets':
      return {...state, tweets: []};
    default: state
  }
};

export default tweetsReducer;
