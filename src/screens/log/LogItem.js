/* eslint-disable react-native/no-inline-styles */
import {Icon, Text} from '@ui-kitten/components';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import {COLORS} from '../../assets';
import screens from '../../const/screens';
import NavigationServices from '../../utils/navigationServices';
import LogItemDetail from './LogItemDetail';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

// import auth from '@react-native-firebase/auth';
const LogItem = props => {
  const [dataItem, setDataItem] = useState([]);
  const [isExpand, setIsExpand] = useState(false);

  useEffect(() => {}, []);

  const onDetailClicked = useCallback(() => {
    NavigationServices.navigate(screens.DETAIL_LOG, {
      data: props.data,
    });
  }, [props.data]);

  const renderItem = useCallback(
    item => {
      return <LogItemDetail data={item.item} parent={props.data} />;
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
            <View style={styles.viewTitle}>
              <Text style={styles.name}>{props.data.id}</Text>
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
                name="arrow-ios-downward-outline"
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
      {isExpand && (
        <View>
          <FlatList
            data={props.data.dataLog}
            style={styles.cardExContainer}
            //   keyExtractor={item => item.id}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
          />
          <TouchableOpacity onPress={onDetailClicked} style={styles.btnDetail}>
            <Text style={styles.txtDetail}>View detail</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default React.memo(LogItem);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    // backgroundColor: COLORS.lightGray3,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'white',
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
    color: 'black',
  },
  cardExContainer: {
    paddingTop: 10,
    // backgroundColor: 'white',
    paddingLeft: 20,
  },
  btnDetail: {
    alignItems: 'flex-end',
    paddingRight: 30,
  },
  txtDetail: {
    fontFamily: 'AvenirNext-Regular',
    color: COLORS.primary,
  },
});
