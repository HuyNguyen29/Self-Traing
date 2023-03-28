/* eslint-disable react-native/no-inline-styles */
import {Button} from '@ui-kitten/components';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import Video from 'react-native-video';
import {COLORS} from '../../../assets';
import HeaderBar from '../../../component/Header/HeaderBar';
import {
  dataEquiqment,
  dataType,
  exerciseData,
  experienceLevels,
} from '../../../const/common';
import ExerciseTracking from './ExerciseTracking';
import StarRating from 'react-native-star-rating-widget';
import {useDispatch, useSelector} from 'react-redux';
import {getExercisesItemSuccess} from '../../../redux/actions/exercisesItem.action';
import {getExercisesSuccess} from '../../../redux/actions/exercises.action';

const ExerciseInfo = props => {
  const {params} = props?.route;
  const refPagerView = useRef(null);
  const [selectedPage, setSelectedPage] = useState(0);
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const dataExercisesItem = useSelector(state => state.exercisesItem.data);
  const dataExercises = useSelector(state => state.exercises.data);
  const [isYourExercises, setIsYourExercises] = useState(false);
  const [data, setData] = useState(params.data);

  useEffect(() => {
    setData(dataExercisesItem[params.data.id - 1]);
  }, [dataExercisesItem, params.data.id]);

  useEffect(() => {
    setRating(dataExercisesItem[params.data.id - 1].rating);
  }, [dataExercisesItem, params.data.id]);

  useEffect(() => {
    if (Array.isArray(dataExercises[params.parent?.id - 1]?.yourExercises)) {
      dataExercises[params.parent.id - 1].yourExercises.map((i, index) => {
        if (i.id === params.data.id) {
          setIsYourExercises(true);
          return;
        }
      });
    }
  }, [dataExercises, params]);

  const onMenuClicked = useCallback(
    selected => () => {
      setSelectedPage(selected);
      refPagerView.current?.setPage(selected);
    },
    [],
  );

  const onPageSelected = useCallback(e => {
    const page = e.nativeEvent.position;
    setSelectedPage(page);
  }, []);

  const onRating = useCallback(
    e => {
      setRating(e);
      let tmp = [...dataExercisesItem];
      tmp[params.data.id - 1].rating = e;
      dispatch(getExercisesItemSuccess(tmp));
    },
    [dataExercisesItem, dispatch, params.data.id],
  );

  const onAddClicked = useCallback(() => {
    const tmp = [...dataExercises];
    if (Array.isArray(tmp[params.parent.id - 1].yourExercises)) {
      tmp[params.parent.id - 1].yourExercises.push(params.data);
    } else {
      tmp[params.parent.id - 1].yourExercises = [params.data];
    }
    setIsYourExercises(true);
    dispatch(getExercisesSuccess(tmp));
  }, [dataExercises, dispatch, params]);

  const onRemoveClicked = useCallback(() => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to remove?',
      [
        {text: 'Cancel'},
        {
          text: 'OK',
          onPress: () => {
            const tmp = [...dataExercises];
            tmp[params.parent.id - 1].yourExercises.map((i, index) => {
              if (i.id === params.data.id) {
                tmp[params.parent.id - 1].yourExercises.splice(index, 1);
                return;
              }
            });
            setIsYourExercises(false);
            dispatch(getExercisesSuccess(tmp));
          },
        },
      ],
      {cancelable: true},
    );
  }, [dataExercises, dispatch, params]);

  console.log(
    `%c data?.videolink`,
    'color: blue; font-weight: 600',
    data?.videolink,
  );

  return (
    <View style={styles.container}>
      <HeaderBar title={'Exercises'} back />
      <Text style={styles.header}>{data?.execisename}</Text>
      <View style={{flex: 1}}>
        <View style={styles.headerPager}>
          <TouchableOpacity onPress={onMenuClicked(0)} style={styles.pagerBtn}>
            <Text
              style={
                selectedPage === 0 ? styles.txtPagerSelected : styles.txtPager
              }>
              Detail
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onMenuClicked(1)} style={styles.pagerBtn}>
            <Text
              style={
                selectedPage === 1 ? styles.txtPagerSelected : styles.txtPager
              }>
              Tracking
            </Text>
          </TouchableOpacity>
        </View>
        <PagerView
          ref={refPagerView}
          style={styles.pagerView}
          initialPage={0}
          scrollEnabled
          orientation={'horizontal'}
          onPageSelected={onPageSelected}>
          <ScrollView
            key={0}
            contentContainerStyle={styles.viewContent}
            showsVerticalScrollIndicator={false}>
            <Video
              source={{
                uri: data?.videolink,
              }}
              style={styles.backgroundVideo}
              controls
              paused
            />
            <View style={styles.viewProfile}>
              <Text style={styles.title}>EXERCISE PROFILE</Text>
              <View style={styles.contentProfile}>
                <Text style={styles.txtProfile}>Target Muscle Group</Text>
                <Text style={styles.txtProfileValue}>
                  {exerciseData[data?.targetmuscleid - 1].name}
                </Text>
              </View>
              <View style={styles.contentProfile}>
                <Text style={styles.txtProfile}>Exercise Type</Text>
                <Text style={styles.txtProfileValue}>
                  {dataType[data?.execisetypeid - 1].name}
                </Text>
              </View>
              <View style={styles.contentProfile}>
                <Text style={styles.txtProfile}>Equipment Required</Text>
                <Text style={styles.txtProfileValue}>
                  {dataEquiqment[data?.equipmentid - 1]?.name}
                </Text>
              </View>
              <View style={styles.contentProfile}>
                <Text style={styles.txtProfile}>Mechanics</Text>
                <Text style={styles.txtProfileValue}>--</Text>
              </View>
              <View style={styles.contentProfile}>
                <Text style={styles.txtProfile}>Force Type</Text>
                <Text style={styles.txtProfileValue}>--</Text>
              </View>
              <View style={styles.contentProfile}>
                <Text style={styles.txtProfile}>Experience Level</Text>
                <Text style={styles.txtProfileValue}>
                  {experienceLevels?.[data?.experiencelevelid - 1]?.name}
                </Text>
              </View>
              <View style={styles.contentProfile}>
                <Text style={styles.txtProfile}>Secondary Muscles</Text>
                <Text style={styles.txtProfileValue}>--</Text>
              </View>
            </View>
            <View style={styles.imgSection}>
              <Image
                source={{
                  uri: exerciseData[data?.targetmuscleid - 1].imgSection,
                }}
                style={styles.imgMus}
              />
            </View>
            <View style={styles.guide}>
              <Text style={styles.txtDes}>{'Overview'}</Text>
              <Text style={styles.txtContent}>{data?.content1}</Text>
              <Text style={styles.txtDes}>{'Instructions'}</Text>
              <Text style={styles.txtContent}>{data?.content2}</Text>
              <Text style={styles.txtDes}>{'Tips'}</Text>
              <Text style={styles.txtContent}>{data?.content3}</Text>
            </View>
            <View style={styles.rating}>
              <Text style={styles.txtRating}>Tap to Rate</Text>
              <StarRating
                color={COLORS.primary}
                rating={rating}
                onChange={onRating}
                style={{paddingVertical: 5}}
              />
              <Text style={styles.txtRating}>
                {rating && `Your rating: ${rating}`}
              </Text>
            </View>
            <Button
              style={styles.button}
              status="primary"
              onPress={!isYourExercises ? onAddClicked : onRemoveClicked}>
              <Text
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  color: COLORS.white,
                  fontSize: 30,
                }}>
                {!isYourExercises
                  ? 'Add to your exercises'
                  : 'Remove from your list'}
              </Text>
            </Button>
          </ScrollView>
          <ScrollView
            key={1}
            contentContainerStyle={styles.viewContent}
            showsVerticalScrollIndicator={false}>
            <ExerciseTracking data={data} />
          </ScrollView>
        </PagerView>
      </View>
    </View>
  );
};

export default ExerciseInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  pagerView: {
    flex: 1,
  },
  header: {
    fontFamily: 'TitanOne',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 25,
    color: 'white',
    paddingBottom: 20,
    fontSize: 20,
  },
  viewContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerPager: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  pagerBtn: {
    backgroundColor: COLORS.lightGray3,
  },
  txtPagerSelected: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 14,
    color: 'white',
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  txtPager: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 14,
    color: COLORS.primary,
    backgroundColor: COLORS.lightGray3,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  backgroundVideo: {
    height: 200,
    borderRadius: 10,
  },
  viewProfile: {
    marginTop: 15,
    backgroundColor: COLORS.lightGray3,
    borderTopWidth: 5,
    borderColor: COLORS.primary,
    padding: 15,
  },
  title: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 14,
  },
  contentProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: COLORS.secondary,
  },
  txtProfile: {
    flex: 0.7,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 14,
    color: COLORS.primary,
  },
  txtProfileValue: {
    flex: 0.3,
    fontFamily: 'AvenirNext-Regular',
    fontSize: 14,
  },
  imgSection: {
    marginTop: 15,
  },
  imgMus: {
    resizeMode: 'contain',
    width: '100%',
    height: 300,
  },
  guide: {
    marginTop: 15,
  },
  txtDes: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 16,
    marginVertical: 5,
  },
  txtContent: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
  },
  rating: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  txtRating: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 13,
    color: 'black',
  },
});
