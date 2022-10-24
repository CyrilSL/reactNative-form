import React, { useEffect } from 'react';
import { Text, View, Animated, Easing, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const Thankyou=(navigation)=> {

const goHome =()=>{
  navigation.navigate('Home');
}
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Thank you for registering with</Text>
        <Text style={styles.text}>X-Volt Technology LLC!</Text>
        <Text style={styles.text}>More app updates and news coming up!</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    animation: {
      position: 'absolute',
      width:'100%',
      height:'100%',
    },
    container: {
      flex:1,
      justifyContent: 'center',
      backgroundColor: '#0e101c',
      flexDirection: 'column',
      alignItems: 'stretch',
      
    },
    text:{

      textAlign: 'center', // <-- the magic
      fontWeight: 'bold',
      fontSize: 21,
      color: '#fff',
    }
  }
);

export default Thankyou;