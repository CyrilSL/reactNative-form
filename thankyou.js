import React from 'react';
import { Text, View } from 'react-native';
import CustomForm from './CustomForm';
import { initializeApp } from 'firebase/app';
import firestore from "firebase/compat/firestore";
import functions from 'firebase/functions'
import { db, app } from './firebase'





const App = () => {

  return (
    <Text>Thankou!</Text>
  );
}

export default App;