import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import screens from '../const/screens';
import Login from '../screens/auth/login/Login';
import SignUp from '../screens/auth/signup/SignUp';
import NavigationServices from '../utils/navigationServices';
import {MainTabBarNavigator} from './MainTabBarNavigator';

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      initialRouteName={screens.LOGIN}
      headerMode="none"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name={screens.LOGIN} component={Login} />
      <MainStack.Screen name={screens.SIGNUP} component={SignUp} />
      <MainStack.Screen
        name={screens.MAINTAB}
        component={MainTabBarNavigator}
      />
    </MainStack.Navigator>
  );
};

function Root() {
  return (
    <SafeAreaProvider>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <NavigationContainer ref={NavigationServices.navigationRef}>
          <MainStackScreen />
        </NavigationContainer>
      </TouchableWithoutFeedback>
    </SafeAreaProvider>
  );
}

export default Root;
