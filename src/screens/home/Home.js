/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS, images} from '../../assets';
import Exercises from '../../component/List/Exercises';

// import auth from '@react-native-firebase/auth';
const Home = ({}) => {
  const dataStore = useSelector(state => state.exercises.data);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataStore);
  }, [dataStore]);

  const renderItem = useCallback(item => {
    return <Exercises data={item.item} />;
  }, []);

  const header = useCallback(() => {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.iconTitle}>
          <Image
            source={images.workout}
            resizeMode="contain"
            style={{
              height: 40,
              width: 40,
              tintColor: COLORS.primary,
              zIndex: 999999,
            }}
          />
        </View>
        <Text style={styles.txtTitle}>
          Welcome to Self Traing!{'\n'}We provide all excercises you need.
        </Text>
      </View>
    );
  }, []);

  return (
    <View>
      <FlatList
        ListHeaderComponent={header}
        data={data}
        style={styles.list}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        // extraData={data}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 25,
    marginVertical: 20,
    padding: 20,
    borderRadius: 20,
  },
  iconTitle: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
    marginRight: 25,
  },
  list: {},
  txtTitle: {
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    flex: 1,
  },
});
