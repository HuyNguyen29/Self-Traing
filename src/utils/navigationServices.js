import * as React from 'react';
import {CommonActions, StackActions} from '@react-navigation/native';

const navigationRef = React.createRef();

function navigate(routeName, params) {
  try {
    navigationRef.current.dispatch(
      CommonActions.navigate({
        name: routeName,
        params,
      }),
    );
  } catch (e) {}
}

function goBack() {
  navigationRef.current.goBack();
}

function replace(routeName, params, key) {
  navigationRef.current.dispatch({
    ...StackActions.replace(routeName, params),
    key,
  });
}

function push(routeName, params, key) {
  navigationRef.current.dispatch({
    ...StackActions.push(routeName, params),
    key,
  });
}

function reset(config) {
  navigationRef.current.dispatch(CommonActions.reset(config));
}

const getCurrentRoute = () => {
  const route = navigationRef.current.getCurrentRoute().name;
  return route;
};

// add other navigation functions that you need and export them
const NavigationServices = {
  navigate,
  goBack,
  reset,
  navigationRef,
  push,
  replace,
  getCurrentRoute,
};
export default NavigationServices;
