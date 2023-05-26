import React from 'react';
import { SafeAreaView } from 'react-native';

import 'react-native-gesture-handler';
import AppNavigation from './src/navigation';

function App(props){
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigation />
    </SafeAreaView>
  );
}

export default App;
