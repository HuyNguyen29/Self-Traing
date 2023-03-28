/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import AppLoading from '../component/AppLoading';
import {getLoadingSelector} from '../redux/selectors/loading';

function withLoading(WrappedComponent, actionTypes) {
  function HOC({isLoading, ...props}) {
    return (
      <View style={{flex: 1}}>
        <WrappedComponent {...props} />
        {isLoading && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              alignItems: 'center',
              width: '100%',
              height: '100%',
              opacity: 0.5,
              zIndex: 10,
            }}>
            <AppLoading />
          </View>
        )}
      </View>
    );
  }
  const mapStateToProps = state => ({
    isLoading: getLoadingSelector(state, actionTypes),
  });
  return connect(mapStateToProps, null)(HOC);
}
export default withLoading;
