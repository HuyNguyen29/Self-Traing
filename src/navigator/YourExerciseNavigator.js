import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';

const StackHome = createStackNavigator();

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import screens from '../const/screens';
import YourExercise from '../screens/yourExercise/YourExercise';
import {COLORS} from '../assets';
import ExerciseInfo from '../screens/home/excerciseInfo/ExerciseInfo';
import ExerciseDetail from '../screens/home/exerciseDetail/ExerciseDetail';

function YourExerciseNavigator({navigation, route}) {
  useEffect(() => {
    navigation.setOptions({tabBarVisible: getTabBarVisibility(route)});
  }, [navigation, route]);
  return (
    <StackHome.Navigator
      initialRouteName={screens.YOUR_EXERCISE}
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
        name={screens.YOUR_EXERCISE}
        component={YourExercise}
        options={{
          title: 'Your exercises',
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
        name={screens.EX_DETAIL}
        component={ExerciseDetail}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </StackHome.Navigator>
  );
}

export default YourExerciseNavigator;

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
