/* eslint-disable react-native/no-inline-styles */
import {Button, Spinner, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, images, SIZES} from '../../../assets';
import screens from '../../../const/screens';
import {loginHandle} from '../../../redux/actions/auth.action';
import {LOGIN} from '../../../redux/constants/auth.constant';
import NavigationServices from '../../../utils/navigationServices';
import {getLoadingSelector} from '../../../redux/selectors/loading';

// import auth from '@react-native-firebase/auth';
const SignIn = ({navigation}) => {
  const [data, setData] = React.useState({
    password: '',
    checkTextInputChange: false,
    secureTextEntry: true,
  });

  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const isLoading = useSelector(state =>
    getLoadingSelector(state, [LOGIN.HANDLER]),
  );

  // React.useEffect(() => {
  //     const unsubscribe = auth().onAuthStateChanged(user => {
  //         if(user) {
  //             navigation.replace("Home")
  //         }
  //     })

  //     return unsubscribe
  // }, []);

  const handleSignIn = () => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      setLoading(false);
      if (email === 'huynguyen' && password === '12345678') {
        NavigationServices.navigate(screens.MAINTAB);
      } else {
        setError(true);
      }
    }, 1000);

    // setError(true);
    // const payload = {
    //   phone: email,
    //   password: password,
    // };
    // dispatch(
    //   loginHandle(
    //     payload,
    //     () => {
    //       NavigationServices.navigate(screens.MAINTAB);
    //     },
    //     () => {
    //       setError(true);
    //     },
    //   ),
    // );
  };

  const handleSignUp = () => {
    NavigationServices.navigate(screens.SIGNUP);
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const LoadingIndicator = props => (
    <View style={styles.indicator}>
      <Spinner size="small" status="basic" />
    </View>
  );

  return (
    <View
      source={images.background}
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <SafeAreaView>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>
          Self Training
        </Text>
        <KeyboardAwareScrollView>
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image
                source={images.logo}
                resizeMode="contain"
                style={{
                  height: 250,
                  width: '100%',
                }}
              />
            </View>
            <View
              style={{
                flex: 3,
                paddingHorizontal: 20,
                paddingVertical: 30,
                marginBottom: -10,
              }}>
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
                  onChangeText={value => setEmail(value)}
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
                  onChangeText={value => setPassword(value)}
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
                  Username or password is not correct
                </Text>
              )}
              <Button
                style={styles.button}
                status="primary"
                accessoryRight={loading && LoadingIndicator}
                onPress={handleSignIn}>
                <Text
                  style={{
                    justifyContent: 'center',
                    alignSelf: 'center',
                    color: COLORS.white,
                    fontSize: 30,
                  }}>
                  Login
                </Text>
              </Button>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{}}>Don't have an account? </Text>

                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.transparent,
                  }}
                  onPress={handleSignUp}>
                  <Text
                    style={{
                      color: COLORS.primary,
                      fontSize: 19,
                      textDecorationLine: 'underline',
                      fontWeight: 'bold',
                    }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
};

export default React.memo(SignIn);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000', // for iphone drop shadow (specifies the android equivalent, elevation: 1)
    shadowOffset: {
      width: 0,
      height: 1.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
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
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
