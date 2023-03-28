/* eslint-disable react-native/no-inline-styles */
import {Text} from '@ui-kitten/components';
import React, {useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {COLORS} from '../../../assets';
import {dataEquiqment, dataType, experienceLevels} from '../../../const/common';
import screens from '../../../const/screens';
import NavigationServices from '../../../utils/navigationServices';

// import auth from '@react-native-firebase/auth';
const ExcerciseItem = props => {
  const data = props.data.item;

  const onItemClicked = useCallback(() => {
    NavigationServices.navigate(screens.EX_INFO, {
      data: data,
      parent: props.parent,
    });
  }, [data, props.parent]);

  return (
    <TouchableOpacity
      onPress={onItemClicked}
      style={[
        styles.container,
        props.data.index % 2 === 0
          ? {
              marginRight: 0,
            }
          : {
              marginLeft: 10,
            },
      ]}>
      <FastImage
        source={{uri: data.img}}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 140,
          borderRadius: 10,
        }}
      />
      <Text style={styles.name}>{data.execisename}</Text>
      <View style={styles.tagContainer}>
        <Text style={styles.view}>
          Type{'\n'}
          <Text style={styles.tagValue}>
            {dataType?.[data.execisetypeid - 1]?.name}
          </Text>
        </Text>
        <Text style={styles.view2}>
          Equiqment{'\n'}
          <Text style={styles.tagValue}>
            {dataEquiqment?.[data.equipmentid - 1]?.name}
          </Text>
        </Text>
      </View>
      <View style={[styles.tagContainer, {marginTop: 8}]}>
        <Text style={styles.view}>
          Mechanics{'\n'}
          <Text style={styles.tagValue}>ISOLATION</Text>
        </Text>
        <Text style={styles.view2}>
          LEVEL{'\n'}
          <Text style={styles.tagValue}>
            {experienceLevels?.[data.experiencelevelid - 1]?.name}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ExcerciseItem);

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    overflow: 'hidden',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  name: {
    color: COLORS.primary,
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 16,
    paddingVertical: 10,
    paddingBottom: 5,
    height: 50,
  },
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  view: {
    flex: 0.45,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 11,
    backgroundColor: COLORS.secondary,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'center',
    marginRight: 4,
  },
  view2: {
    flex: 0.55,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 11,
    backgroundColor: COLORS.secondary,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'center',
  },
  tagValue: {
    fontWeight: 'bold',
    fontSize: 10,
    color: COLORS.primary,
  },
});
