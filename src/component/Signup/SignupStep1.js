/* eslint-disable react-native/no-inline-styles */
import {Button, Text} from '@ui-kitten/components';
import React, {useCallback, useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, images, SIZES} from '../../assets';
import {useInputState} from '../../utils/hook';

const SignUpStep1 = props => {
  const [data, setData] = React.useState({
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
  });

  const emailState = useInputState();
  const passwordState = useInputState();

  const [error, setError] = useState(false);

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleNext = useCallback(() => {
    const payload = {email: emailState.value, password: passwordState.value};
    let isError = !Object.values(payload).every(element => element !== '');
    if (isError) {
      setError(true);
    } else {
      setError(false);
      props.handleNext(payload);
    }
  }, [emailState.value, passwordState.value]);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: -10,
      }}>
      <View style={{flex: 1}}>
        <Text style={styles.textAbove}>Email or Phone Number</Text>
        <View style={styles.textBoxSign}>
          <Image
            source={images.person}
            resizeMode="contain"
            style={{
              width: 26,
              height: 40,
              right: 2,
              alignSelf: 'flex-start',
            }}
          />
          <TextInput
            placeholder="Enter your email or phone number..."
            {...emailState}
            autoCapitalize={'none'}
            style={{
              flex: 1,
              height: 40.5,
              fontSize: 15,
              marginLeft: 2,
            }}
          />
        </View>
        <Text style={{fontSize: 14, marginLeft: 12, marginTop: 30}}>
          Password
        </Text>
        <View style={styles.textBoxSign}>
          <Image
            source={images.lock}
            resizeMode="contain"
            style={{
              width: 25,
              height: 20,
              top: 10,
              alignSelf: 'flex-start',
            }}
          />
          <TextInput
            placeholder="Enter your password..."
            secureTextEntry={data.secureTextEntry ? true : false}
            {...passwordState}
            style={{
              flex: 1,
              height: 40.5,
              fontSize: 15,
              marginLeft: 5,
            }}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
            style={{alignItems: 'flex-end'}}>
            {data.secureTextEntry ? (
              <Image
                source={images.eyeclosed}
                resizeMode="contain"
                style={{width: 25, height: 40}}
              />
            ) : (
              <Image
                source={images.eye}
                resizeMode="contain"
                style={{width: 25, height: 40}}
              />
            )}
          </TouchableOpacity>
        </View>
        {error && (
          <Text
            style={{
              color: 'red',
              marginTop: 10,
              fontSize: 14,
              marginLeft: 10,
            }}>
            Please fill all information
          </Text>
        )}
      </View>
      <Button style={styles.button} status="primary" onPress={handleNext}>
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            color: COLORS.white,
            fontSize: 30,
          }}>
          Next
        </Text>
      </Button>
    </View>
  );
};

export default React.memo(SignUpStep1);

const styles = StyleSheet.create({
  textBoxSign: {
    flexDirection: 'row',
    height: 45,
    marginHorizontal: 5,
    marginTop: 5,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray,
    elevation: 2,
  },
  textAbove: {fontSize: 14, marginLeft: 12},
  button: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 55,
    marginHorizontal: 30,
    marginTop: 40,
    marginBottom: -20,
    paddingHorizontal: SIZES.radius,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    color: 'white',
  },
});
