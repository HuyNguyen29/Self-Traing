import 'react-native-gesture-handler';

import React from 'react';
import { useDispatch } from 'react-redux';
import AppContainer from './navigator/rootStack';

const Root = () => {
  const dispatch = useDispatch();

  return <AppContainer />;
};

export default Root;
