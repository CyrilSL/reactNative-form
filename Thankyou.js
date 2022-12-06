import React, {useEffect} from 'react';
import {
    Text,
    View,
    Animated,
    Easing,
    StyleSheet,
    Linking,
    ImageBackground
} from 'react-native';
import {Button} from 'react-native-paper';


const image = { };

const Thankyou = ({navigation}) => {
    const goToRegistrationForm = () => {
        navigation.navigate('Home');
    }


    return (
       
     
            <View style={
                styles.container
            }>
                 <ImageBackground source={require('./assets/wallpaper.png')} resizeMode="cover" style={styles.image}>
                <View style={
                    [styles.goBackButton]
                }>
                          <Button icon="arrow-u-left-top"
onPress={goToRegistrationForm}>
Go to Registration Form
</Button>
                </View>
                <View>
                    <Text style={
                        styles.title
                    }>Vist all our official links</Text>

                </View>

                <Text style={
                    styles.text
                }>X-Volt Technology LLC</Text>
                <View style={
                    styles.buttonSection
                }>
                    <Button icon="" mode="contained"
                        style={
                            styles.button
                        }
                        onPress={
                            () => {
                                Linking.openURL('https://xvolttechnology.com/');
                            }
                    }>Official Website</Button>
                </View>
                <Text style={
                    styles.text
                }>Charging Network</Text>
                <View style={
                    styles.buttonSection
                }>
                    <Button icon="" mode="contained"
                        style={
                            styles.button
                        }
                        onPress={
                            () => {
                                Linking.openURL('https://xvolttechnology.com/charging');
                            }
                    }>Visit Site</Button>
                </View>
                <Text style={
                    styles.text
                }>Go Solar Now!</Text>
                <View style={
                    styles.buttonSection
                }>
                    <Button icon="" mode="contained"
                        style={
                            styles.button
                        }
                        onPress={
                            () => {
                                Linking.openURL('https://xvolttechnology.com/go-solar/');
                            }
                    }>Visit Site</Button>
                </View>
                <Text style={
                    styles.text
                }>X-Volt Store</Text>
                <View style={
                    styles.buttonSection
                }>
                    <Button icon="" mode="contained"
                        style={
                            styles.button
                        }
                        onPress={
                            () => {
                                Linking.openURL('https://xvolttechnology.com/shop/');
                            }
                    }>Visit Site</Button>
                </View>
                </ImageBackground>
            </View>
           
     
    );
}

const styles = StyleSheet.create({
    outOfContainer:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0e101c',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    title: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fff',
        marginBottom: 50
    },
    goBackButton: {
        marginBottom: 10,
        flexDirection: "row",
        color: 'white',
        justifyContent: 'flex-end',
        align: 1
    },
    animation: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0e101c',
        flexDirection: 'column',
        alignItems: 'stretch'

    },
    text: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 21,
        color: '#fff'
    },
    buttonSection: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        marginBottom: 10,
        radius: 4,
        borderRadius: 10,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center'

    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
});

export default Thankyou;
