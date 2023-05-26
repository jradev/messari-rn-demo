import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './src/navigation';
import { store, persistor } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import 'react-native-gesture-handler';

function App(props){
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigation />
      </PersistGate>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
