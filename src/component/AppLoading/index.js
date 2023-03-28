import React, { PureComponent } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default class AppLoading extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { bgColor } = this.props;
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: bgColor ? bgColor : 'rgba(0, 0, 0, 0.2)'
          }
        ]}>
        <ActivityIndicator size="large" color={'#1877F2'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }
});

AppLoading.propTypes = {};
