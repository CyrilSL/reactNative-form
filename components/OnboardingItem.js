import React, { useRef, useEffect } from 'react';
import { FlatList, View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import LottieView from 'lottie-react-native';


const Onboarding = ({ item }) => {
    const animation = useRef(null);
    useEffect(() => {
      // You can control the ref programmatically, rather than using autoPlay
      // animation.current?.play();
    }, []);
  
    
    const { width } = useWindowDimensions();
    return (



        <View style={[styles.container, { width }]}>
              <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={item.image}
      />
            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: '#493d8a',
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64
    }
})


export default Onboarding;