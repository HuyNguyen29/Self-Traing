/* eslint-disable react-native/no-inline-styles */
import {Icon} from '@ui-kitten/components';
import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../assets';
import NavigationServices from '../../utils/navigationServices';

const HeaderBar = React.memo(function HeaderSM(props) {
  function onLeftClicked() {
    NavigationServices.goBack();
  }

  return (
    <View style={styles.viewContent}>
      {props.back ? (
        <TouchableOpacity style={styles.buttonBack} onPress={onLeftClicked}>
          <Icon
            style={{width: 24, height: 24}}
            fill={'white'}
            name="arrow-ios-back"
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonBack} />
      )}
      <Text style={styles.textTitle}>{props.title}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  viewContent: {
    backgroundColor: COLORS.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonBack: {
    paddingVertical: 10,
    paddingLeft: 16,
    paddingRight: 16,
    width: 50,
  },
  textTitle: {
    // fontFamily: 'AvenirNext-DemiBold',
    fontSize: 17,
    // fontWeight: 'bold',
    color: 'white',
    paddingVertical: 10,
  },
});

export default HeaderBar;
