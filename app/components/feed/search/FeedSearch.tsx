import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

import styles from './FeedSearch.css';

const FeedSearch = ({ handleClick, handleUserNameChanged }): JSX.Element => {

  return (
    <Container className={styles.feedSearch}>
      <TextField id="search" label="Type Twitter username" onChange={handleUserNameChanged}></TextField>
      <Button onClick={handleClick} variant="contained" color="primary">Find</Button>
    </Container>
  );
};

export default FeedSearch;
