import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

const StackHome = createStackNavigator();

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {COLORS} from '../assets';
import screens from '../const/screens';
import ExerciseInfo from '../screens/home/excerciseInfo/ExerciseInfo';
import Log from '../screens/log/Log';
import DetailLog from '../screens/log/DetailLog';

function LogNavigator({navigation, route}) {
  useEffect(() => {
    navigation.setOptions({tabBarVisible: getTabBarVisibility(route)});
  }, [navigation, route]);
  return (
    <StackHome.Navigator
      initialRouteName={screens.LOG}
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: COLORS.primary},
        tabBarLabelStyle: {fontWeight: 'bold', fontSize: 12},
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
        headerBackVisible: false,
      })}>
      <StackHome.Screen
        name={screens.LOG}
        component={Log}
        options={{
          title: 'Tracking Log',
          headerLeft: null,
        }}
      />
      <StackHome.Screen
        name={screens.EX_INFO}
        component={ExerciseInfo}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <StackHome.Screen
        name={screens.DETAIL_LOG}
        component={DetailLog}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </StackHome.Navigator>
  );
}

export default LogNavigator;

const getTabBarVisibility = route => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const notShowOnScreens = []; // add screen not show tabbar here. ex: screens.LOGIN
  if (routeName === undefined) {
    return true;
  }
  if (notShowOnScreens.indexOf(routeName) > -1) {
    return false;
  }
  return true;
};
