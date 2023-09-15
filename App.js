import {SafeAreaView, Text, View} from 'react-native';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Routing from './src/navigation/Routing';
import {persistor, store} from './src/utils/reducers/store';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaView style={{flex: 1}}>
            <Routing />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
