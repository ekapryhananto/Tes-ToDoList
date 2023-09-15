import {StyleSheet, Text, ToastAndroid, View} from 'react-native';
import React, {useEffect} from 'react';
import TambahListComponent from '../components/section/TambahListComponent';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PushNotification from 'react-native-push-notification';

const TambahList = ({navigation, route}) => {
  const [note, setNote] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [edit, setEdit] = useState(false);
  const dispath = useDispatch();
  const {dataList} = useSelector(state => state.list);

  useEffect(() => {
    if (route.params) {
      setNote(route.params.catatan);
      setDate(route.params.tanggal);
      setTime(route.params.waktu);
      setEdit(true);
    }
  }, []);

  const onSave = () => {
    if (note && date && time) {
      var idd = new Date();
      var data = [...dataList];
      const list = {
        id: idd.getMilliseconds(),
        catatan: note,
        tanggal: date,
        waktu: time,
      };
      // const fiveMinuteBefore = new Date(Date. - 5 * 60 * 1000);
      // console.log('menite', time);
      // console.log('5menite', fiveMinuteBefore);
      // const timeUntilNotification = fiveMinuteBefore - new Date();
      // setTimeout(() => {
      //   PushNotification.localNotificationSchedule({
      //     title: `Yang harus ada lakukan`,
      //     message: `Anda harus melakukan ${note} 5 menit lagi`,
      //     date: fiveMinuteBefore,
      //   });
      // }, timeUntilNotification);

      // PushNotification.localNotification({
      //   channelId: 'tes-notif',
      //   title: `Tambah Data`,
      //   message: `Anda Menambahlam list`,
      // });

      data.push(list);
      dispath({type: 'CREATE', data: data});
      navigation.navigate('Home');
    } else {
      ToastAndroid.show(
        `Isi Semua Data`,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  };

  const update = () => {
    const list = {
      id: route.params.id,
      catatan: note,
      tanggal: date,
      waktu: time,
    };
    dispath({type: 'UPDATE', data: list});
    navigation.navigate('Home');
  };

  return (
    <View style={{flex: 1}}>
      <TambahListComponent
        navigation={navigation}
        note={note}
        setNote={text => setNote(text)}
        showDate={showDate}
        setShowDate={value => setShowDate(value)}
        showTime={showTime}
        setShowTime={value => setShowTime(value)}
        date={date}
        setDate={value => setDate(value)}
        time={time}
        setTime={value => setTime(value)}
        onSave={onSave}
        update={update}
        kondisi={edit}
      />
    </View>
  );
};

export default TambahList;

const styles = StyleSheet.create({});
