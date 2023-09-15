import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ScreenNavigation from './ScreenNavigation';

const Stack = createNativeStackNavigator();
const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ScreenNavigation" component={ScreenNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routing;
