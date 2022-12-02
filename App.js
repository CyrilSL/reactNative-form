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
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value = true) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      }
      else {
        
        setIsFirstLaunch(false);
        console.log(isFirstLaunch);
      }
    })
  })
  
  if (isFirstLaunch == null) {
    return null;
  }
  else if (isFirstLaunch == true) {
    return (
      <NavigationContainer>
        <PaperProvider>
          <Stack.Navigator screenOptions={{
            headerShown: false
          }} >
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Home" component={CustomForm} />
            <Stack.Screen name="Thankyou" component={Thankyou} />
          </Stack.Navigator>
        </PaperProvider>
      </NavigationContainer>
    );
  }
  else if (isFirstLaunch == false)
  {
    return <CustomForm/>
    
  }

  // return (
  //   <NavigationContainer>
  //     <PaperProvider>
  //       <Stack.Navigator screenOptions={{
  //         headerShown: false
  //       }} >
  //         <Stack.Screen name="Onboarding" component={Onboarding} />
  //         <Stack.Screen name="Home" component={CustomForm} />
  //         <Stack.Screen name="Thankyou" component={Thankyou} />
  //       </Stack.Navigator>
  //     </PaperProvider>
  //   </NavigationContainer>
  //);





};

export default App;