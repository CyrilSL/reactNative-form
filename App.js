import React from 'react';
import { StyleSheet } from 'react-native';
import CustomForm from './CustomForm';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Thankyou from './Thankyou';

const Stack = createNativeStackNavigator();
const App = () => (
  
  <NavigationContainer>
    <PaperProvider>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Home">
        <Stack.Screen name="Home" component={CustomForm} />
        <Stack.Screen name="Thankyou" component={Thankyou} />
      </Stack.Navigator>
    </PaperProvider>
  </NavigationContainer>
);

export default App;