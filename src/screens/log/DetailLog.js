/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ProgressChart} from 'react-native-chart-kit';
import {COLORS} from '../../assets';
import HeaderBar from '../../component/Header/HeaderBar';
import {getScreenWidth} from '../../const/common';
import LogItemDetail from './LogItemDetail';
import {PieChart} from 'react-native-svg-charts';

// import auth from '@react-native-firebase/auth';
const dataColor = ['#355070', '#6d597a', '#b56576', '#e56b6f', '#eaac8b'];

const DetailLog = props => {
  const [data, setData] = useState({});
  const {params} = props?.route;
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    let tmpTime = 0;
    let tmpCalo = 0;
    let tmpWeight = 0;
    let tmpHeart = 0;
    let count = 0;
    let tmpChart = [];
    params.data.dataLog.map((i, key) => {
      i.trackingDate.map((k, kkey) => {
        if (params.data.id === k) {
          tmpWeight = tmpWeight + i.trackingWeight[kkey];
          tmpCalo = tmpCalo + i.calo[kkey];
          tmpHeart = tmpHeart + i.heart[kkey];
          tmpTime = tmpTime + i.timer[kkey];
          tmpChart.push({
            key: i.id,
            name: i.execisename,
            amount: i.calo[kkey],
            svg: {fill: dataColor[count]},
          });
          count = count + 1;
        }
      });
    });
    tmpChart.push({
      key: 'left',
      name: 'Calories need to burn',
      amount: 2500 - tmpCalo,
      svg: {fill: '#f77f00'},
    });
    setDataChart(tmpChart);
    const date = new Date(null);
    date.setSeconds(tmpTime); // specify value for SECONDS here
    const result = date.toISOString().slice(11, 19);
    const payload = {
      time: result,
      calo: tmpCalo,
      weight: tmpWeight,
      heart: Math.round(tmpHeart / count),
    };
    setData(payload);
  }, [params.data]);

  console.log(`%c dataChart`, 'color: blue; font-weight: 600', dataChart);

  const renderItem = useCallback(
    item => {
      return <LogItemDetail data={item.item} parent={params.data} />;
    },
    [params.data],
  );
  const tmp = {
    labels: [
      'Web servers',
      'Operating systems',
      'Programming languages',
      'JavaScript',
      'Web Frameworks',
    ], // optional
    data: [0.2, 0.6, 0.8, 0.1, 0.25],
    colors: [
      'rgba(255, 0, 0,0.5)',
      'rgba(238, 130, 238,0.6)',
      'rgba(106, 90, 205,0.5)',
      'rgba(60, 179, 113,0.2)',
      'rgba(255, 172, 71 , 0.3)',
    ],
  };

  const pieData = [
    {
      key: 1,
      amount: 50,
      svg: {fill: '#600080'},
    },
    {
      key: 2,
      amount: 50,
      svg: {fill: '#9900cc'},
    },
    {
      key: 3,
      amount: 40,
      svg: {fill: '#c61aff'},
    },
    {
      key: 4,
      amount: 95,
      svg: {fill: '#d966ff'},
    },
    {
      key: 5,
      amount: 35,
      svg: {fill: '#ecb3ff'},
    },
  ];

  const chartPie = useCallback(() => {
    return (
      <PieChart
        style={{height: 200, marginTop: 10}}
        valueAccessor={({item}) => item.amount}
        data={dataChart}
        spacing={0}
        outerRadius={'95%'}
      />
    );
  }, [dataChart]);

  return (
    <View style={styles.container}>
      <HeaderBar title={'Detail tracking log'} back />
      <Text style={styles.header}>{params.data.id}</Text>
      <ScrollView>
        <>
          <Text style={styles.title}>Workout Details</Text>
          <View style={styles.content}>
            <View style={[styles.viewRow, {marginBottom: 15}]}>
              <View style={styles.rowItem}>
                <Text style={styles.txtDes}>Workout Time</Text>
                <Text style={[styles.txtValue, {color: '#FFBF00'}]}>
                  {data.time}
                </Text>
              </View>
              <View style={styles.rowItem}>
                <Text style={styles.txtDes}>Total Kilocalories</Text>
                <Text style={[styles.txtValue, {color: '#fb8500'}]}>
                  {data.calo} <Text style={styles.txtCur}>K</Text>CAL
                </Text>
              </View>
            </View>
            <View style={styles.viewRow}>
              <View style={styles.rowItem}>
                <Text style={styles.txtDes}>Total Weight</Text>
                <Text style={[styles.txtValue, {color: '#e56b6f'}]}>
                  {data.weight} <Text style={styles.txtCur}>kg</Text>
                </Text>
              </View>
              <View style={styles.rowItem}>
                <Text style={styles.txtDes}>Avg Heart Rate</Text>
                <Text style={[styles.txtValue, {color: '#ef476f'}]}>
                  {data.heart} <Text style={styles.txtCur}>bpm</Text>
                </Text>
              </View>
            </View>
          </View>
          {chartPie()}
          <Text style={styles.txtGoal}>20% of Goal</Text>
          <View style={styles.labelContainer}>
            {dataChart.map((i, key) => {
              return (
                <View key={key} style={styles.labelContainer}>
                  <View
                    style={{width: 20, height: 15, backgroundColor: i.svg.fill}}
                  />
                  <Text style={styles.labelChart}>{i.name}</Text>
                </View>
              );
            })}
          </View>
          <Text style={styles.title}>List Exercises</Text>
          <View style={styles.cardExContainer}>
            {params.data.dataLog.map((i, key) => (
              <LogItemDetail key={key} data={i} parent={params.data} />
            ))}
          </View>
        </>
      </ScrollView>
    </View>
  );
};

export default DetailLog;

const styles = StyleSheet.create({
  container: {
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
  title: {
    fontFamily: 'AvenirNext-DemiBold',
    color: 'black',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  content: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 10,
  },
  txtDes: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'AvenirNext-Regular',
  },
  txtValue: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'AvenirNext-DemiBold',
  },
  txtCur: {
    fontSize: 18,
  },
  viewRow: {
    flexDirection: 'row',
  },
  rowItem: {
    flex: 0.5,
  },
  cardExContainer: {
    marginTop: 15,
  },
  labelContainer: {
    flexWrap: 'wrap',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelChart: {
    fontFamily: 'AvenirNext-Regular',
    color: 'black',
    fontSize: 14,
    paddingHorizontal: 5,
  },
  txtGoal: {
    textAlign: 'center',
    fontFamily: 'AvenirNext-DemiBold',
    marginTop: 5,
  },
});
