import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {TextBold, TextRegular} from '../Global';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';

const HomeComponent = ({navigation, data, onDelete}) => {
  return (
    <View style={{flex: 1}}>
      <TextBold text={'Home'} size={20} color={'black'} />
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <View
              style={[
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                },
                styles.list,
              ]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{marginRight: 16}}>
                  <TextRegular text={item.tanggal} />
                  <TextRegular text={item.waktu} />
                </View>
                <TextRegular
                  text={item.catatan}
                  size={16}
                  color={'black'}
                  numberOfLines={2}
                />
              </View>
              <View
                style={{flexDirection: 'row', right: 10, position: 'absolute'}}>
                <TouchableOpacity
                  style={{marginHorizontal: 10}}
                  onPress={() => navigation.navigate('Isi Data', item)}>
                  <Icon name="edit" size={22} color="green" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                  <Icon name="erase" size={22} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
      <View
        style={{
          flex: 1,
          bottom: 0,
          right: 0,
          position: 'absolute',
        }}>
        <TouchableOpacity
          style={styles.tombolplus}
          onPress={() => navigation.navigate('Isi Data')}>
          <Icon name="plus" size={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeComponent;

const styles = StyleSheet.create({
  tombolplus: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    marginTop: 12,
    backgroundColor: 'silver',
    padding: 10,
    borderRadius: 8,
  },
});
