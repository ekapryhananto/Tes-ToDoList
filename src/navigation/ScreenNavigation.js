import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import TambahList from '../screen/TambahList';

const Stack = createStackNavigator();
const ScreenNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Isi Data" component={TambahList} />
    </Stack.Navigator>
  );
};

export default ScreenNavigation;
