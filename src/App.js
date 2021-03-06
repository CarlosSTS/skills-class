import React from 'react';
import {StatusBar} from 'react-native';
import './config/reactotron';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159C1" />
      <Routes />
    </>
  );
};

export default App;
