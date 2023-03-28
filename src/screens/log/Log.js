/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import LogItem from './LogItem';

// import auth from '@react-native-firebase/auth';
const Log = ({navigation}) => {
  const [data, setData] = useState([]);
  const dataExercisesLog = useSelector(state => state.exercisesLog.data);

  console.log(
    `%c dataExercisesLog`,
    'color: blue; font-weight: 600',
    dataExercisesLog,
  );

  const renderItem = useCallback(item => {
    return <LogItem data={item.item} />;
  }, []);

  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={dataExercisesLog}
          contentContainerStyle={styles.list}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </View>
  );
};

export default React.memo(Log);

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },
});
