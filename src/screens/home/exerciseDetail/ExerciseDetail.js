/* eslint-disable react-native/no-inline-styles */
import {Icon} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {COLORS} from '../../../assets';
import HeaderBar from '../../../component/Header/HeaderBar';
import {
  dataEquiqment,
  dataType,
  exerciseData,
  experienceLevels,
} from '../../../const/common';
import screens from '../../../const/screens';
import NavigationServices from '../../../utils/navigationServices';
import ExerciseItem from './ExerciseItem';

const ExerciseDetail = props => {
  const infiniteAnimationIconRef = React.useRef();

  const {params} = props?.route;

  const [data, setData] = useState([]);

  useEffect(() => {
    const tmp = [...params.data];
    tmp.splice(0, 1);

    setData(tmp);
  }, [params.data]);

  React.useEffect(() => {
    infiniteAnimationIconRef?.current?.startAnimation();
  }, []);

  const renderItem = useCallback(
    item => {
      return <ExerciseItem data={item} parent={params.parent} />;
    },
    [params.parent],
  );

  const onItemClicked = useCallback(() => {
    NavigationServices.navigate(screens.EX_INFO, {
      data: params?.data[0],
      parent: params.parent,
    });
  }, [params]);

  const HeaderList = useCallback(() => {
    return (
      <TouchableOpacity onPress={onItemClicked} style={styles.containerTopItem}>
        <View style={styles.iconFav}>
          <Icon
            animationConfig={{cycles: Infinity}}
            ref={infiniteAnimationIconRef}
            style={{width: 32, height: 32}}
            fill={'white'}
            name="heart"
            // animation="zoom"
            animation="pulse"
          />
        </View>
        <FastImage
          source={{uri: params?.data[0]?.img}}
          resizeMode="cover"
          style={{
            width: '100%',
            height: 140,
            borderRadius: 10,
          }}
        />
        <Text style={styles.name}>{params?.data[0]?.execisename}</Text>
        <View style={styles.tagContainer}>
          <Text style={styles.view}>
            Type{'\n'}
            <Text style={styles.tagValue}>
              {dataType[data[0]?.execisetypeid]?.name}
            </Text>
          </Text>
          <Text style={styles.view}>
            Equiqment{'\n'}
            <Text style={styles.tagValue}>
              {dataEquiqment[data[0]?.equipmentid]?.name}
            </Text>
          </Text>
          <Text style={styles.view}>
            Mechanics{'\n'}
            <Text style={styles.tagValue}>ISOLATION</Text>
          </Text>
          <Text style={styles.view}>
            LEVEL{'\n'}
            <Text style={styles.tagValue}>
              {experienceLevels[data[0]?.experiencelevelid]?.name}
            </Text>
          </Text>
        </View>
      </TouchableOpacity>
    );
  }, [data, onItemClicked, params?.data]);

  return (
    <View style={styles.container}>
      <HeaderBar title={'Exercises'} back />
      <Text style={styles.header}>{params?.parent?.name}</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        ListFooterComponent={<View style={{height: 40}} />}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        ListHeaderComponent={HeaderList}
      />
    </View>
  );
};

export default ExerciseDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontFamily: 'TitanOne',
    backgroundColor: COLORS.primary,
    paddingLeft: 25,
    color: 'white',
    paddingBottom: 20,
    fontSize: 20,
  },
  list: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  containerTopItem: {
    borderRadius: 10,
    borderWidth: 4,
    borderColor: COLORS.primary,
    paddingHorizontal: 8,
    paddingVertical: 8,
    marginBottom: 10,
  },
  iconFav: {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    zIndex: 999,
    top: -20,
    right: -10,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: COLORS.primary,
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 16,
    paddingVertical: 10,
    paddingBottom: 5,
  },
  tagContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  view: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 12,
    backgroundColor: COLORS.secondary,
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'center',
  },
  tagValue: {
    fontWeight: 'bold',
    fontSize: 11,
    color: COLORS.primary,
  },
});
