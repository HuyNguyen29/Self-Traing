import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const StackHome = createStackNavigator();

import screens from '../const/screens';
import Home from '../screens/home/Home';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import ExerciseDetail from '../screens/home/exerciseDetail/ExerciseDetail';
import {COLORS} from '../assets';
import ExerciseInfo from '../screens/home/excerciseInfo/ExerciseInfo';

function HomeNavigator({navigation, route}) {
  useEffect(() => {
    navigation.setOptions({tabBarVisible: getTabBarVisibility(route)});
  }, [navigation, route]);
  return (
    <StackHome.Navigator
      initialRouteName={screens.HOME}
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
        name={screens.HOME}
        component={Home}
        options={{
          title: 'Exercises',
          headerLeft: null,
        }}
      />
      <StackHome.Screen
        name={screens.EX_DETAIL}
        component={ExerciseDetail}
        options={{
          title: '',
          headerShown: false,
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
    </StackHome.Navigator>
  );
}

export default HomeNavigator;

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
