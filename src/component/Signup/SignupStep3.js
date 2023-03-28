/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  IndexPath,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS, SIZES} from '../../assets';
import {
  dataEquiqment,
  experienceLevels,
  goals,
  trainingPlace,
} from '../../const/common';

const SignUpStep3 = props => {
  const [selectedIndex, setSelectedIndex] = React.useState([new IndexPath(0)]);
  const [selectedPlaceIndex, setSelectedPlaceIndex] = React.useState(
    new IndexPath(0),
  );
  const [selectedLevelIndex, setSelectedLevelIndex] = React.useState(
    new IndexPath(0),
  );
  const [selectedGoalIndex, setSelectedGoalIndex] = React.useState(
    new IndexPath(0),
  );

  const [error, setError] = useState(false);

  const handleNext = useCallback(() => {
    const equiqment = selectedIndex.map(index => {
      return dataEquiqment[index.row];
    });
    const place = trainingPlace[selectedPlaceIndex.row];
    const level = experienceLevels[selectedLevelIndex.row];
    const goal = goals[selectedGoalIndex.row];
    const payload = {
      equiqment,
      place,
      level,
      goal,
    };
    let isError = !Object.values(payload).every(element => element !== '');
    if (isError) {
      setError(true);
    } else {
      setError(false);
      console.log(`%c payload`, 'color: blue; font-weight: 600', payload);
      props.handleNext(payload);
    }
  }, [
    props,
    selectedGoalIndex,
    selectedIndex,
    selectedLevelIndex,
    selectedPlaceIndex,
  ]);

  const handleBack = useCallback(() => {
    props.handleBack();
  }, []);

  const displayValue = selectedIndex.map(index => {
    return (
      dataEquiqment[index.row].name + (selectedIndex.length > 1 ? ', ' : '')
    );
  });

  const displayPlaceValue =
    trainingPlace?.[selectedPlaceIndex?.row]?.name || trainingPlace[0].name;

  const displayLevelValue =
    experienceLevels?.[selectedLevelIndex?.row]?.name ||
    experienceLevels[0].name;

  const displayGoalValue =
    goals?.[selectedGoalIndex?.row]?.name || goals[0].name;

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom: -10,
      }}>
      <View style={{flex: 1}}>
        <Text style={[styles.textAbove, {marginBottom: 5}]}>
          Your equiqment items
        </Text>
        <Select
          placeholder={'Select items'}
          multiSelect={true}
          selectedIndex={selectedIndex}
          value={displayValue}
          onSelect={index => setSelectedIndex(index)}>
          {dataEquiqment.map(item => (
            <SelectItem key={item.id} title={item.name} />
          ))}
        </Select>
        <View style={[styles.inputRow, {marginTop: 20}]}>
          <View style={styles.width50}>
            <Text style={[styles.textAbove, {marginBottom: 5}]}>
              Your training place
            </Text>
            <Select
              selectedIndex={selectedPlaceIndex}
              value={displayPlaceValue}
              onSelect={index => setSelectedPlaceIndex(index)}>
              {trainingPlace.map(item => (
                <SelectItem key={item.id} title={item.name} />
              ))}
            </Select>
          </View>
          <View style={styles.width50}>
            <Text style={[styles.textAbove, {marginBottom: 5}]}>
              Your level
            </Text>
            <Select
              placeholder={'Experience levels'}
              selectedIndex={selectedLevelIndex}
              value={displayLevelValue}
              onSelect={index => setSelectedLevelIndex(index)}>
              {experienceLevels.map(item => (
                <SelectItem key={item.id} title={item.name} />
              ))}
            </Select>
          </View>
        </View>

        <View style={[styles.inputRow, {marginTop: 20}]}>
          <View style={styles.width50}>
            <Text style={[styles.textAbove, {marginBottom: 5}]}>Your goal</Text>
            <Select
              placeholder={'Select place'}
              selectedIndex={selectedGoalIndex}
              value={displayGoalValue}
              onSelect={index => setSelectedGoalIndex(index)}>
              {goals.map(item => (
                <SelectItem key={item.id} title={item.name} />
              ))}
            </Select>
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
            Finish
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default React.memo(SignUpStep3);

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
    width: '47%',
  },
});
