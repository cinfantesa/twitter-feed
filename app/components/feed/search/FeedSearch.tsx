import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import styles from './FeedSearch.css';

const FeedSearch = ({ handleClick, handleUserNameChanged }) => {
  return (
    <Box className={styles.feedSearch}>
      <TextField id="search" label="Type Twitter username" onChange={handleUserNameChanged}></TextField>
      <Button onClick={handleClick} variant="contained" color="primary">Find</Button>
    </Box>
  );
};

export default FeedSearch;
