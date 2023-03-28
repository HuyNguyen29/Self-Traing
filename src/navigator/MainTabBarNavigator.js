/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@ui-kitten/components';
import React from 'react';

// IMPORT SCREEN SPACE
import {Platform} from 'react-native';
import {COLORS} from '../assets';
import screens from '../const/screens';
import HomeNavigator from './HomeNavigator';
import LogNavigator from './LogNavigator';
import YourExerciseNavigator from './YourExerciseNavigator';
const isiOS = Platform.OS === 'ios';
const MainBottomTab = createBottomTabNavigator();

const MainTabBarNavigator = () => {
  return (
    <MainBottomTab.Navigator
      // tabBar={props => <MyTabBar {...props} />}
      screenOptions={({route}) => ({
        safeAreaInset: {bottom: 'never', top: 'never'},
        tabBarInactiveTintColor: 'rgba(225, 225, 225, 0.7)',
        tabBarActiveTintColor: 'white',
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
      })}>
      <MainBottomTab.Screen
        headerMode="none"
        name={screens.HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon
              style={{width: 28, height: 28}}
              fill={color}
              name="book-open"
            />
          ),
        }}
      />
      <MainBottomTab.Screen
        name={screens.CALENDAR_NAVIGATOR}
        component={YourExerciseNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Your Exercise',
          tabBarIcon: ({color, size}) => (
            <Icon
              style={{width: 28, height: 28}}
              fill={color}
              name="calendar"
            />
          ),
        }}
      />
      <MainBottomTab.Screen
        name={screens.LOG_NAVIGATOR}
        component={LogNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Tracking Log',
          tabBarIcon: ({color, size}) => (
            <Icon
              style={{width: 28, height: 28}}
              fill={color}
              name="file-text"
            />
          ),
        }}
      />
    </MainBottomTab.Navigator>
  );
};

export {MainTabBarNavigator};
