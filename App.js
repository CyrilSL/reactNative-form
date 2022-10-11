import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;