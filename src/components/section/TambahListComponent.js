import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {InputText, TextBold, TextMedium, TextRegular} from '../Global';
import Icon from 'react-native-vector-icons/dist/Entypo';
import {TouchableOpacity} from 'react-native';
import DateTime from '@react-native-community/datetimepicker';
import moment from 'moment/moment';
import {FlatList} from 'react-native';

const TambahListComponent = ({
  navigation,
  note,
  setNote,
  showDate,
  setShowDate,
  showTime,
  setShowTime,
  date,
  setDate,
  time,
  setTime,
  onSave,
  update,
  kondisi,
}) => {
  return (
    <View style={{flex: 1, padding: 12}}>
      <TextMedium text={'Isi Data'} size={16} color={'black'} />
      <InputText
        placeholderText="Note"
        multiline={true}
        value={note}
        onChangeText={text => setNote(text)}
      />
      <View style={{flexDirection: 'row', marginTop: 12, alignItems: 'center'}}>
        <View style={styles.kalender}>
          <TextRegular text={date} />
        </View>
        <TouchableOpacity onPress={() => setShowDate(true)}>
          <Icon name="calendar" size={28} />
        </TouchableOpacity>
        {showDate ? (
          <DateTime
            mode="date"
            value={new Date()}
            onChange={async (event, selectedDate) => {
              //   console.log('date', selectedDate);
              setShowDate(false);
              setDate(moment(selectedDate).format('DD-MM-YYYY'));
            }}
            is24Hour={true}
            onConfirm={() => setShowDate(false)}
            onCancel={() => setShowDate(false)}
          />
        ) : null}
      </View>
      <View style={{flexDirection: 'row', marginTop: 12, alignItems: 'center'}}>
        <View style={styles.kalender}>
          <TextRegular text={time} />
        </View>
        <TouchableOpacity onPress={() => setShowTime(true)}>
          <Icon name="clock" size={28} />
        </TouchableOpacity>
        {showTime ? (
          <DateTime
            mode="time"
            value={new Date()}
            onChange={async (event, selectedDate) => {
              //   console.log('time', selectedDate);
              setShowTime(false);
              setTime(moment(selectedDate).format('HH:mm'));
            }}
            is24Hour={true}
            onConfirm={() => setShowTime(false)}
            onCancel={() => setShowTime(false)}
          />
        ) : null}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          kondisi ? update() : onSave();
        }}>
        <TextBold text={'SIMPAN'} size={18} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};

export default TambahListComponent;

const styles = StyleSheet.create({
  kalender: {
    height: 40,
    width: '50%',
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 10,
    paddingLeft: 12,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});
