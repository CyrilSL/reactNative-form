import React, { useState, useEffect, } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import CustomForm from './CustomForm';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Thankyou from './Thankyou';
import Onboarding from './components/Onbording'
import YourApp from './YourApp';
import Loading from './components/Loading'
const Stack = createNativeStackNavigator();


const App = () => {
  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {

    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (err) {
      console.log('Error @checkOnboarding: ', err)
    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
checkOnboarding();
  },[])


  return (
    <NavigationContainer>

      <PaperProvider>

        
        {/*
        {loading ? <Loading /> : viewedOnboarding ? 
         <Stack.Navigator screenOptions={{
          headerShown: false
        }} initialRouteName="Home">
              <Stack.Screen name="Home" component={CustomForm} />
              <Stack.Screen name="Thankyou" component={Thankyou} />
            </Stack.Navigator>
        : <Onboarding /> }


*/}
        
        

    <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Onboarding">
  <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={CustomForm} />
        <Stack.Screen name="Thankyou" component={Thankyou} />
      </Stack.Navigator>


      </PaperProvider>
    </NavigationContainer>
  );





};

export default App;