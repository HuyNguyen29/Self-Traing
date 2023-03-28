/* eslint-disable react-hooks/exhaustive-deps */
import { clearAllError } from '../../redux/actions/error.action';
import { getErrorsSelector } from '../../redux/selectors/error.selector';
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const ErrorBoundary = props => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    console.log('errorserrorserrors', props.errors);
    if (props.errors && props.errors.length > 0) {
      if (!isShowing) {
        if (
          props.errors.some(
            err =>
              err && err.data && err.data?.code === 'NETWORK_REQUEST_FAILED'
          )
        ) {
          setIsShowing(true);
          Alert.alert(
            'SelfTraing',
            'Đã có lỗi xảy ra trong quá trình kết nối với máy chủ. Vui lòng kiểm tra kết nối mạng và thử lại sau.',
            [
              {
                text: 'OK',
                onPress: () => {
                  setIsShowing(false);
                }
              }
            ],
            {
              cancelable: false
            }
          );
        } else {
          setIsShowing(true);
          Alert.alert(
            'SelfTraing',
            props.errors[0]?.data?.message || 'Đã có lỗi xảy ra',
            [
              {
                text: 'OK',
                onPress: () => {
                  setIsShowing(false);
                }
              }
            ],
            {
              cancelable: false
            }
          );
        }
      }
      props.clearAllError();
    }
  }, [props.errors]);
  return <View style={{ flex: 1 }}>{props.children}</View>;
};

const mapStateToProps = state => ({
  errors: getErrorsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clearAllError }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
