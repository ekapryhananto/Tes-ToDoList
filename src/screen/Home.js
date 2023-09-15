import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import HomeComponent from '../components/section/HomeComponent';
import {useDispatch, useSelector} from 'react-redux';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataList} = useSelector(state => state.list);
  console.log('data', dataList);
  const onDelete = id => {
    dispatch({type: 'DELETE', id: id});
  };
  return (
    <View style={{flex: 1, padding: 12}}>
      <HomeComponent
        navigation={navigation}
        data={dataList}
        onDelete={onDelete}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
