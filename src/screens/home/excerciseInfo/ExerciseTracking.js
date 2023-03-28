/* eslint-disable react-native/no-inline-styles */
import {Button, Datepicker, Icon, Input, Modal} from '@ui-kitten/components';
import moment from 'moment';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import StopwatchTimer from 'react-native-animated-stopwatch-timer';
import {LineChart, BarChart} from 'react-native-chart-kit';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, images} from '../../../assets';
import {getScreenWidth} from '../../../const/common';
import {getExercisesItemSuccess} from '../../../redux/actions/exercisesItem.action';
import {getExercisesLogSuccess} from '../../../redux/actions/exercisesLog.action';
import {useInputState} from '../../../utils/hook';
import * as Progress from 'react-native-progress';

const ExerciseTracking = props => {
  const componentRef = React.createRef(null);
  const dispatch = useDispatch();
  const stopwatchTimerRef = React.createRef(null);

  const now = new Date();
  const date = new Date();
  const initialDate = new Date();

  const [isModal, setIsModal] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(date);
  const [initialVisibleDate, setInitialVisibleDate] =
    React.useState(initialDate);
  const dataExercisesItem = useSelector(state => state.exercisesItem.data);
  const dataExercisesLog = useSelector(state => state.exercisesLog.data);
  const [isPlaying, setIsPlaying] = useState(false);
  const [total, setTotal] = useState({time: 0, weight: 0, reps: 0});
  const [record, setRecord] = useState({weight: 0, reps: 0, time: 0});

  const weightState = useInputState();
  const repState = useInputState();
  const caloState = useInputState();
  const heartState = useInputState();

  const [timer, setTimer] = useState(0);

  const onAddClicked = useCallback(() => {
    setIsModal(true);
  }, []);

  useEffect(() => {
    if (
      Array.isArray(dataExercisesItem[props.data.id - 1]?.trackingDate) &&
      dataExercisesItem[props.data.id - 1]?.trackingDate.length > 0
    ) {
      let tmpWeight = 0;
      let tmpTime = 0;
      let tmpRep = 0;

      let maxWeight = Math.max(...props.data?.trackingWeight);
      let indexRecord = 0;

      props.data?.trackingWeight?.map((i, key) => {
        tmpWeight = tmpWeight + i;
        if (i === maxWeight) {
          indexRecord = key;
        }
      });

      props.data?.timer?.map(i => {
        tmpTime = tmpTime + i;
      });
      props.data?.trackingRep?.map(i => {
        tmpRep = tmpRep + i;
      });
      setTotal({
        time: tmpTime,
        weight: tmpWeight,
        reps: tmpRep,
      });
      setRecord({
        weight: props.data?.trackingWeight[indexRecord],
        reps: props.data?.trackingRep[indexRecord],
        time: props.data?.timer[indexRecord],
      });
    }
  }, [dataExercisesItem, props.data]);

  console.log(`%c props.data`, 'color: blue; font-weight: 600', props.data);

  const onSelect = useCallback(nextDate => {
    setSelectedDate(nextDate);

    // clear initialVisibleDate to stop showing it when the datepicker is opened
    setInitialVisibleDate(undefined);
  }, []);

  const onAddConfirmClicked = useCallback(() => {
    setIsModal(false);
    let tmp = [...dataExercisesItem];
    tmp[props.data.id - 1].trackingWeight.push(Number(weightState.value));
    tmp[props.data.id - 1].trackingRep.push(Number(repState.value));
    const tmpDate = moment(selectedDate).format('DD/MM');
    tmp[props.data.id - 1].trackingDate.push(tmpDate);
    if (Array.isArray(tmp[props.data.id - 1].timer)) {
      tmp[props.data.id - 1].timer.push(Number(timer));
    } else {
      tmp[props.data.id - 1].timer = [Number(timer)];
    }

    if (Array.isArray(tmp[props.data.id - 1].calo)) {
      tmp[props.data.id - 1].calo.push(Number(caloState.value));
    } else {
      tmp[props.data.id - 1].calo = [Number(caloState.value)];
    }

    if (Array.isArray(tmp[props.data.id - 1].heart)) {
      tmp[props.data.id - 1].heart.push(Number(heartState.value));
    } else {
      tmp[props.data.id - 1].heart = [Number(heartState.value)];
    }

    const tmpLog = [...dataExercisesLog];

    if (tmpLog.length === 0) {
      tmpLog.push({
        id: tmpDate,
        dataLog: [tmp[props.data.id - 1]],
      });
    } else {
      let flag = true;
      tmpLog.find((element, index) => {
        if (element.id === tmpDate) {
          tmpLog[index].dataLog.push(tmp[props.data.id - 1]);
          flag = false;
        }
      });
      if (flag) {
        tmpLog.push({
          id: tmpDate,
          dataLog: [tmp[props.data.id - 1]],
        });
      }
    }

    dispatch(getExercisesItemSuccess(tmp));
    dispatch(getExercisesLogSuccess(tmpLog));
  }, [
    caloState.value,
    dataExercisesItem,
    dataExercisesLog,
    dispatch,
    heartState.value,
    props.data.id,
    repState.value,
    selectedDate,
    timer,
    weightState.value,
  ]);

  const onPauseClicked = useCallback(() => {
    setIsPlaying(false);
    stopwatchTimerRef.current?.pause();
    const res = stopwatchTimerRef.current?.getSnapshot();
    setTimer(res / 1000);
  }, [stopwatchTimerRef]);

  const onPlayClicked = useCallback(() => {
    setIsPlaying(true);
    stopwatchTimerRef.current?.play();
  }, [stopwatchTimerRef]);

  const onStopClicked = useCallback(() => {
    setIsPlaying(false);
    const res = stopwatchTimerRef.current?.getSnapshot();
    stopwatchTimerRef.current?.pause();
    setTimer(res / 1000);
  }, [stopwatchTimerRef]);

  const onRefreshClicked = useCallback(() => {
    stopwatchTimerRef.current?.reset();
    setIsPlaying(false);
  }, [stopwatchTimerRef]);

  return (
    <View>
      {Array.isArray(dataExercisesItem[props.data.id - 1]?.trackingDate) &&
        dataExercisesItem[props.data.id - 1]?.trackingDate.length > 0 && (
          <>
            <Text style={styles.title}>Overview</Text>
            <View style={styles.overviewContainer}>
              <View style={styles.circle}>
                <Text style={styles.overviewValue}>{total.time}</Text>
                <Text style={styles.overviewTitle}>Total time</Text>
              </View>
              <View style={styles.circleMain}>
                <Text style={styles.overviewValue}>{total.weight}</Text>
                <Text style={styles.overviewTitle}>Total weight</Text>
              </View>
              <View
                style={[
                  styles.circle,
                  {marginRight: 0, backgroundColor: '#caf0f8'},
                ]}>
                <Text style={styles.overviewValue}>{total.reps}</Text>
                <Text style={styles.overviewTitle}>Total reps</Text>
              </View>
            </View>
            <Text style={styles.title}>Personal Records</Text>
            <View style={styles.recordContainer}>
              <View style={styles.recordContainerTitle}>
                <Image
                  source={images.bestIcon}
                  resizeMode="contain"
                  style={{width: 25, height: 40, marginRight: 10}}
                />
                <Text style={styles.txtRecord}>
                  The greatest weight ever raised is{' '}
                  <Text style={styles.recordValue}>{record.weight}</Text>kg
                  {'\n'} with{' '}
                  <Text style={styles.recordValue}>{record.reps}</Text>{' '}
                  repetitions in{' '}
                  <Text style={styles.recordValue}>{record.time}</Text> seconds
                </Text>
              </View>
            </View>
            <Text style={styles.title}>Timer Line Chart</Text>
            <LineChart
              data={{
                labels:
                  dataExercisesItem[props.data.id - 1]?.trackingDate || [],
                datasets: [
                  {
                    data: dataExercisesItem[props.data.id - 1]?.timer || [],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 50} // from react-native
              height={220}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: COLORS.primary,
                backgroundGradientFrom: '#00b4d8',
                backgroundGradientTo: '#0077b6',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: 'white',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />

            <Text style={styles.title}>Calories burn per training</Text>
            <Text style={styles.des}>
              The recommended daily calorie remaining is 2,500 for men.
            </Text>
            <View style={styles.progress}>
              {dataExercisesItem[props.data.id - 1]?.calo?.map((i, key) => (
                <View key={key} style={styles.progressItem}>
                  <Text style={styles.txtProgress}>
                    {dataExercisesItem[props.data.id - 1]?.trackingDate[key]}
                  </Text>
                  <Progress.Bar
                    progress={i / 2500}
                    width={getScreenWidth() - 90}
                    color={COLORS.primary}
                    height={10}
                    borderRadius={0}
                    showsText={true}
                  />
                </View>
              ))}
            </View>
            <Text style={styles.title}>Heart Rate Line Chart</Text>
            <LineChart
              data={{
                labels:
                  dataExercisesItem[props.data.id - 1]?.trackingDate || [],
                datasets: [
                  {
                    data: dataExercisesItem[props.data.id - 1]?.heart || [],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 50} // from react-native
              height={220}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: COLORS.primary,
                backgroundGradientFrom: '#7f0000',
                backgroundGradientTo: '#b20000',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: 'white',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            <Text style={styles.title}>Weight Line Chart</Text>
            <BarChart
              data={{
                labels:
                  dataExercisesItem[props.data.id - 1]?.trackingDate || [],
                datasets: [
                  {
                    data:
                      dataExercisesItem[props.data.id - 1]?.trackingWeight ||
                      [],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 50} // from react-native
              height={220}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: COLORS.primary,
                backgroundGradientFrom: '#007ea7',
                backgroundGradientTo: '#00509d',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: 'white',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            <Text style={styles.title}>Repetitions Line Chart</Text>
            <LineChart
              data={{
                labels:
                  dataExercisesItem[props.data.id - 1]?.trackingDate || [],
                datasets: [
                  {
                    data:
                      dataExercisesItem[props.data.id - 1]?.trackingRep || [],
                  },
                ],
              }}
              width={Dimensions.get('window').width - 50} // from react-native
              height={220}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: COLORS.primary,
                backgroundGradientFrom: '#6495ED',
                backgroundGradientTo: '#0047AB',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: 'white',
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </>
        )}
      <Button onPress={onAddClicked} style={styles.button} status="primary">
        <Text
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            color: COLORS.white,
            fontSize: 30,
          }}>
          Add your training log
        </Text>
      </Button>
      <Modal
        visible={isModal}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setIsModal(false)}>
        <ScrollView style={styles.modalContainer}>
          <View style={styles.viewRow}>
            <Text style={styles.txtDes}>On date:</Text>
            <Datepicker
              ref={componentRef}
              date={selectedDate}
              initialVisibleDate={initialVisibleDate}
              onSelect={onSelect}
              style={{
                flex: 1,
              }}
            />
          </View>
          <StopwatchTimer
            ref={stopwatchTimerRef}
            containerStyle={styles.stopWatchContainer}
            textCharStyle={styles.stopWatchChar}
            trailingZeros={2}
            // Uncomment the below line to use it in timer mode
            // initialTimeInMs={30 * 1000}
          />

          <View style={styles.viewTimerBtn}>
            {isPlaying ? (
              <Icon
                style={{width: 60, height: 60}}
                fill={COLORS.primary}
                name="pause-circle"
                onPress={onPauseClicked}
              />
            ) : (
              <Icon
                style={{width: 60, height: 60}}
                fill={COLORS.primary}
                name="play-circle"
                onPress={onPlayClicked}
              />
            )}
            <Icon
              style={{width: 60, height: 60}}
              fill={COLORS.primary}
              name="stop-circle"
              onPress={onStopClicked}
            />
            <Icon
              style={{width: 40, height: 40}}
              fill={COLORS.primary}
              name="refresh"
              onPress={onRefreshClicked}
            />
          </View>

          <View style={styles.viewRow}>
            <Text style={styles.txtDes}>Weight:</Text>
            <Input
              placeholder="kg"
              {...weightState}
              keyboardType="number-pad"
              style={{
                flex: 1,
              }}
            />
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.txtDes}>Repetitions:</Text>
            <Input
              placeholder="Repetitions"
              {...repState}
              keyboardType="number-pad"
              style={{
                flex: 1,
              }}
            />
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.txtDes}>Calories:</Text>
            <Input
              placeholder="kCAL"
              {...caloState}
              keyboardType="number-pad"
              style={{
                flex: 1,
              }}
            />
          </View>
          <View style={styles.viewRow}>
            <Text style={styles.txtDes}>Heart rate:</Text>
            <Input
              placeholder="bpm"
              {...heartState}
              keyboardType="number-pad"
              style={{
                flex: 1,
              }}
            />
          </View>
          <Button
            onPress={onAddConfirmClicked}
            style={styles.button}
            status="primary">
            <Text
              style={{
                justifyContent: 'center',
                alignSelf: 'center',
                color: COLORS.white,
                fontSize: 30,
              }}>
              Add
            </Text>
          </Button>
        </ScrollView>
      </Modal>
    </View>
  );
};

export default React.memo(ExerciseTracking);

const styles = StyleSheet.create({
  title: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 14,
    color: 'black',
    marginTop: 10,
  },
  des: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 12,
    color: 'black',
  },
  progress: {
    marginVertical: 15,
  },
  progressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  txtProgress: {
    fontSize: 10,
    lineHeight: 13,
    fontFamily: 'AvenirNext-Regular',
    marginRight: 10,
  },
  overviewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  overviewTitle: {
    fontFamily: 'AvenirNext-Regular',
    color: COLORS.primary,
    textAlign: 'center',
  },
  overviewValue: {
    fontFamily: 'AvenirNext-Bold',
    color: COLORS.primary,
    fontSize: 20,
  },
  circle: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginRight: 60,
    backgroundColor: '#00b4d8',
    borderColor: COLORS.primary,
  },
  circleMain: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: '#90e0ef',
    zIndex: 5,
    borderColor: COLORS.primary,
  },
  button: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: getScreenWidth() - 20,
    borderRadius: 10,
    padding: 20,
  },
  viewRow: {
    flex: 1,
    marginBottom: 10,
  },
  txtDes: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 14,
    color: 'black',
    flex: 0.7,
    marginBottom: 5,
  },
  stopWatchContainer: {
    paddingVertical: 16,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: 'black',
    borderColor: 'gray',
    borderRadius: 24,
  },
  stopWatchChar: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: COLORS.primary,
    fontVariant: ['tabular-nums'],
  },
  viewTimerBtn: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  recordContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 10,
  },
  recordContainerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  },
  txtRecord: {
    color: 'white',
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 25,
  },
  recordValue: {
    textDecorationLine: 'underline',
  },
});
