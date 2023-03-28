/* eslint-disable react-native/no-inline-styles */
import {Button, Text} from '@ui-kitten/components';
import React, {useCallback, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {COLORS, SIZES} from '../../assets';
import {useInputState} from '../../utils/hook';

const SignupStep2 = props => {
  const nameState = useInputState();
  const ageState = useInputState();
  const fatState = useInputState();
  const heightState = useInputState();
  const weightState = useInputState();

  const [error, setError] = useState(false);

  const handleNext = useCallback(() => {
    const payload = {
      name: nameState.value,
      age: ageState.value,
      bodyFat: fatState.value,
      height: heightState.value,
      weight: weightState.value,
    };
    let isError = !Object.values(payload).every(element => element !== '');
    if (isError) {
      setError(true);
    } else {
      setError(false);
      props.handleNext(payload);
    }
  }, [ageState, fatState, heightState, nameState.value, props, weightState]);

  const handleBack = useCallback(() => {
    props.handleBack();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: -10,
      }}>
      <View style={{flex: 1}}>
        <Text style={styles.textAbove}>Your full name</Text>
        <View style={styles.textBoxSign}>
          <TextInput
            placeholder="ABC"
            {...nameState}
            autoCapitalize={'none'}
            style={{
              flex: 1,
              height: 40.5,
              fontSize: 15,
              marginLeft: 2,
            }}
          />
        </View>
        <View style={[styles.inputRow, {marginTop: 20}]}>
          <View style={styles.width50}>
            <Text style={styles.textAbove}>Your age</Text>
            <View style={styles.textBoxSign}>
              <TextInput
                placeholder="20"
                autoCapitalize={'none'}
                keyboardType="number-pad"
                style={{
                  flex: 1,
                  height: 40.5,
                  fontSize: 15,
                  marginLeft: 2,
                }}
                {...ageState}
              />
            </View>
          </View>
          <View style={styles.width50}>
            <Text style={styles.textAbove}>Body fat</Text>
            <View style={styles.textBoxSign}>
              <TextInput
                placeholder="20"
                autoCapitalize={'none'}
                keyboardType="number-pad"
                style={{
                  flex: 1,
                  height: 40.5,
                  fontSize: 15,
                  marginLeft: 2,
                }}
                {...fatState}
              />
              <Text>%</Text>
            </View>
          </View>
        </View>
        <View style={[styles.inputRow, {marginTop: 20}]}>
          <View style={styles.width50}>
            <Text style={styles.textAbove}>Input your height</Text>
            <View style={styles.textBoxSign}>
              <TextInput
                placeholder="155"
                {...heightState}
                autoCapitalize={'none'}
                keyboardType="number-pad"
                style={{
                  flex: 1,
                  height: 40.5,
                  fontSize: 15,
                  marginLeft: 2,
                }}
              />
              <Text>cm</Text>
            </View>
          </View>
          <View style={styles.width50}>
            <Text style={styles.textAbove}>Input your weight</Text>
            <View style={styles.textBoxSign}>
              <TextInput
                placeholder="50"
                {...weightState}
                autoCapitalize={'none'}
                keyboardType="number-pad"
                style={{
                  flex: 1,
                  height: 40.5,
                  fontSize: 15,
                  marginLeft: 2,
                }}
              />
              <Text>kg</Text>
            </View>
          </View>
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
      <View style={styles.buttonContainer}>
        <Button style={styles.button} status="primary" onPress={handleBack}>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              color: COLORS.white,
              fontSize: 30,
            }}>
            Back
          </Text>
        </Button>
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
    </View>
  );
};

export default React.memo(SignupStep2);

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    alignItems: 'center',
  },
  textAbove: {fontSize: 14, marginLeft: 12},
  button: {
    alignContent: 'center',
    justifyContent: 'center',
    height: 55,
    width: '45%',
    paddingHorizontal: SIZES.radius,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    color: 'white',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  width50: {
    width: '50%',
  },
});
