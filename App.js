import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CustomForm from './CustomForm';
import { initializeApp } from 'firebase/app';
import firestore from "firebase/compat/firestore";
import functions from 'firebase/functions'
import { db, app } from './firebase'



const image = { uri: "https://reactjs.org/logo-og.png" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <CustomForm />
    </ImageBackground>
  </View>
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