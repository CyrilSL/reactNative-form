import React, { useState, useRef, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, useWindowDimensions, Animated, TouchableOpacity } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg'
import { AntDesign } from '@expo/vector-icons'

const Loading = () => {



    return (
        <View style={styles.container}>
           <Text> Loading... </Text >
        </View>
    );
}



const styles = StyleSheet.create({

});


export default Loading;