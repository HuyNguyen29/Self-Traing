/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import YourExerciseItem from './YourExerciseItem';

// import auth from '@react-native-firebase/auth';
const Calendar = ({navigation}) => {
  const [data, setData] = useState([]);
  const dataExercises = useSelector(state => state.exercises.data);

  useEffect(() => {
    const tmp = [];
    dataExercises.map((i, key) => {
      if (Array.isArray(i.yourExercises)) {
        tmp.push(dataExercises[key]);
      }
    });
    setData(tmp);
  }, [dataExercises]);

  const renderItem = useCallback(item => {
    return <YourExerciseItem data={item.item} />;
  }, []);

  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={data}
          style={styles.list}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({});
