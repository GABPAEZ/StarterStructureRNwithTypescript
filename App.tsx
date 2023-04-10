import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Navigator from './src/components/navigator/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
      {/* <Icon name="arrow-left" size={30} color="#900" />; */}
    </NavigationContainer>
  );
};

export default App;
