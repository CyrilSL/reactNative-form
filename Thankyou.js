import React, { useEffect, useRef } from 'react';
import { Text, View, Animated, Easing, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';

export default function ControllingAnimationProgress() {
  const animationProgress = useRef(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false
    }).start();
  }, [])

  return (
    <View style={styles.container}>
        
        <Text style={styles.text}>Thank you for registering with</Text>
        <Text style={styles.text}>X-Volt Technology LLC!</Text>
        <Text style={styles.text}>App updates and news coming!</Text>
      <Lottie
        style={styles.animation}
        source={require('./assets/54504-confetti.json')}
        progress={animationProgress.current}
      />

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