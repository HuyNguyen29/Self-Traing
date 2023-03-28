/* eslint-disable react-native/no-inline-styles */
import {Text} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import screens from '../../const/screens';
import NavigationServices from '../../utils/navigationServices';

// import auth from '@react-native-firebase/auth';
const LogItemDetail = props => {
  const [dataItem, setDataItem] = useState([]);
  const dataExercises = useSelector(state => state.exercises.data);

  useEffect(() => {}, []);
  console.log(
    `%c dataExercises[props.data.execisetypeid - 1]`,
    'color: blue; font-weight: 600',
    dataExercises[props.data.execisetypeid - 1],
  );

  const onItemClicked = useCallback(() => {
    NavigationServices.navigate(screens.EX_INFO, {
      data: props.data,
      parent: dataExercises[props.data.execisetypeid - 1],
    });
  }, [dataExercises, props.data]);

  return (
    <TouchableOpacity onPress={onItemClicked} style={styles.cardEx}>
      <FastImage
        source={{
          uri: props.data.img,
        }}
        resizeMode="stretch"
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          overflow: 'hidden',
        }}
      />
      <Text style={styles.titleEx}>{props.data.execisename}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(LogItemDetail);

const styles = StyleSheet.create({
  cardEx: {
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  titleEx: {
    fontFamily: 'AvenirNext-DemiBold',
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
