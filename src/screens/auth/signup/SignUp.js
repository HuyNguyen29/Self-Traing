/* eslint-disable react-native/no-inline-styles */
import {Layout, Text, ViewPager} from '@ui-kitten/components';
import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {COLORS, SIZES} from '../../../assets';
import SignupStep1 from '../../../component/Signup/SignupStep1';
import SignupStep2 from '../../../component/Signup/SignupStep2';
import SignupStep3 from '../../../component/Signup/SignupStep3';
import {getScreenHeight} from '../../../const/common';
import screens from '../../../const/screens';
import NavigationServices from '../../../utils/navigationServices';

const SignUp = ({}) => {
  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = useCallback(
    dataObj => {
      console.log(`%c dataObj`, 'color: blue; font-weight: 600', dataObj);
      setSignupData({...signupData, ...dataObj});
      setSelectedIndex(selectedIndex + 1);
      if (selectedIndex === 2) {
        NavigationServices.navigate(screens.LOGIN);
        console.log(
          `%c signupData`,
          'color: blue; font-weight: 600',
          signupData,
        );
      }
    },
    [selectedIndex, signupData],
  );

  const handleBack = useCallback(
    dataObj => {
      setSelectedIndex(selectedIndex - 1);
    },
    [selectedIndex],
  );

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <SafeAreaView style={{flex: 1}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>
          Sign up
        </Text>
        <KeyboardAwareScrollView>
          <ViewPager
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}>
            <Layout style={styles.tab}>
              <SignupStep1 handleNext={handleNext} />
            </Layout>
            <Layout style={styles.tab}>
              <SignupStep2 handleNext={handleNext} handleBack={handleBack} />
            </Layout>
            <Layout style={styles.tab}>
              <SignupStep3 handleNext={handleNext} handleBack={handleBack} />
            </Layout>
          </ViewPager>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    height: (getScreenHeight() * 75) / 100,
  },
  button: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 55,
    marginHorizontal: 30,
    marginBottom: -20,
    paddingHorizontal: SIZES.radius,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    color: 'white',
  },
});
