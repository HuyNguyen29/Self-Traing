/* eslint-disable react-native/no-inline-styles */
import {Icon, Text} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {COLORS} from '../../assets';
import screens from '../../const/screens';
import NavigationServices from '../../utils/navigationServices';

// import auth from '@react-native-firebase/auth';
const Excercises = props => {
  const [numberVideo, setNumberVideo] = useState(0);
  const dataExercisesItem = useSelector(state => state.exercisesItem.data);
  const [dataItem, setDataItem] = useState([]);

  useEffect(() => {
    let tmp = 0;
    dataExercisesItem.map((i, key) => {
      if (i.targetmuscleid === props.data.id) {
        tmp = tmp + 1;
        dataItem.push(i);
      }
    });
    setNumberVideo(tmp);
  }, []);

  const onItemClicked = useCallback(() => {
    NavigationServices.navigate(screens.EX_DETAIL, {
      data: dataItem,
      parent: props.data,
    });
  }, [dataItem, props.data]);

  return (
    <TouchableOpacity onPress={onItemClicked} style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.viewInfo}>
          <FastImage
            source={{uri: props.data.img}}
            resizeMode="stretch"
            style={{
              width: 90,
              height: 70,
              borderRadius: 10,
              overflow: 'hidden',
            }}
          />
          <View style={styles.viewTitle}>
            <Text style={styles.name}>{props.data.name}</Text>
            <Text style={styles.txtExercise}>{numberVideo} excercises</Text>
          </View>
        </View>
        <View>
          <Icon
            style={{width: 32, height: 25}}
            fill={COLORS.darkgray}
            name="arrow-ios-forward"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(Excercises);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewTitle: {
    marginLeft: 20,
  },
  name: {
    fontSize: 20,
    fontFamily: 'TitanOne',
    marginBottom: 10,
  },
  txtExercise: {
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
    backgroundColor: COLORS.primary,
    paddingVertical: 2,
    textAlign: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    color: 'white',
    width: 120,
  },
});
