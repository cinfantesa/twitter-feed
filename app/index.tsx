import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Feed from './components/feed/Feed';

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () => {
  render(
    <AppContainer>
      <Feed />
    </AppContainer>,
    document.getElementById('root')
  );
});
