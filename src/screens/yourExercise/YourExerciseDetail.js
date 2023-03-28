/* eslint-disable react-native/no-inline-styles */
import {Text} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import screens from '../../const/screens';
import NavigationServices from '../../utils/navigationServices';

// import auth from '@react-native-firebase/auth';
const YourExcercisesDetail = props => {
  const [dataItem, setDataItem] = useState([]);

  useEffect(() => {}, []);

  const onItemClicked = useCallback(() => {
    NavigationServices.navigate(screens.EX_INFO, {
      data: props.data,
      parent: props.parent,
    });
  }, [props.data]);

  console.log(`%c props.data`, 'color: blue; font-weight: 600', props.data);

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

export default React.memo(YourExcercisesDetail);

const styles = StyleSheet.create({
  cardEx: {
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  titleEx: {
    fontFamily: 'AvenirNext-Regular',
    color: 'black',
    marginLeft: 10,
  },
});
