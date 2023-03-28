/* eslint-disable react-native/no-inline-styles */
import {Icon, Text} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Platform, UIManager} from 'react-native';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  LayoutAnimation,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {COLORS} from '../../assets';
import {exercisesItemData} from '../../const/common';
import screens from '../../const/screens';
import NavigationServices from '../../utils/navigationServices';
import YourExerciseDetail from './YourExerciseDetail';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

// import auth from '@react-native-firebase/auth';
const YourExcercisesItem = props => {
  const [dataItem, setDataItem] = useState([]);
  const [isExpand, setIsExpand] = useState(false);

  useEffect(() => {}, []);

  const onItemClicked = useCallback(() => {
    NavigationServices.navigate(screens.EX_DETAIL, {
      data: dataItem,
      parent: props.data,
    });
  }, [dataItem, props.data]);

  const renderItem = useCallback(
    item => {
      return <YourExerciseDetail data={item.item} parent={props.data} />;
    },
    [props.data],
  );

  const onExpandClicked = useCallback(() => {
    LayoutAnimation.configureNext({
      duration: 300,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    });
    setIsExpand(!isExpand);
  }, [isExpand]);

  return (
    <View>
      <TouchableOpacity onPress={onExpandClicked} style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.viewInfo}>
            <FastImage
              source={{uri: props.data.img}}
              resizeMode="stretch"
              style={{
                width: 70,
                height: 55,
                borderRadius: 10,
                overflow: 'hidden',
              }}
            />
            <View style={styles.viewTitle}>
              <Text style={styles.name}>{props.data.name}</Text>
            </View>
          </View>
          <View>
            {isExpand ? (
              <Icon
                style={{width: 32, height: 25}}
                fill={COLORS.darkgray}
                name="arrow-ios-upward-outline"
              />
            ) : (
              <Icon
                style={{width: 32, height: 25}}
                fill={COLORS.darkgray}
                name="arrow-ios-forward-outline"
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
      {isExpand && (
        <FlatList
          data={props.data.yourExercises}
          style={styles.cardExContainer}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default React.memo(YourExcercisesItem);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
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
    color: 'white',
  },
  cardExContainer: {
    marginTop: 10,
    paddingLeft: 15,
  },
});
