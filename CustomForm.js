import { useEffect, useState } from 'react';
import { StatusBar, Text, View, StyleSheet, TextInput, Alert, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Dropdown } from 'react-native-element-dropdown';
import { Button } from 'react-native-paper';

import countryCity from './json/countryCity.json'

import { app } from './firebase'
export const CustomForm = ({ navigation }) => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (err) {
      console.log('Error @clearOnboarding', err)
    }
  }
  clearOnboarding;
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
    }
  });

  /*states for dropdown starts*/
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);


  const [isFocus, setIsFocus] = useState(false);


  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  /*States for Dropdown ends */

  const [submitButtonText, setSubmitButtonText] = useState('Register');


  const resetData = () => {
    reset({
      firstName: '',
      lastName: '',

    })
    setCountry('');
    setState('');

  }

  const submitSusessfulAlert = () =>
  Alert.alert(
    "Registeration Sucessful",
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  const isValidEmail = email =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const onSubmit = data => {
    data.country = country;
    data.state = state;
    if (data.email !== '') {
      const isValid = isValidEmail(data.email);
      console.log(isValid);
      if (!isValid) {
        Alert.alert(
          "Alert",
          "Enter a valid e-mail address!",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );



        return;
      }
    }
    setSubmitButtonText('Registering...');
    app.firestore()
      .collection('users')
      .add({
        firstName: data.firstName,
        address: data.address,
        state: data.state,
        country: data.country,
        zipcode: data.zipcode,
        emailAddress: data.email
      })
      .then(() => {
        console.log('User added!');
        resetData();
        submitSusessfulAlert();
        setSubmitButtonText('Submit');
        
      });

  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  const goLinksView = () =>{
    navigation.navigate('Thankyou');
  }
  /*Dropdown menu functions Begins*/

  const countryArray = [];
  var stateArray = [];


  function countryListGenerator() {
    for (var i = 0; i < countryCity.length; i++) {
      countryArray.push(
        {
          value: countryCity[i].country,
          label: countryCity[i].country

        },

      );
      if (countryCity[i].country == 'United States') {

      }
    }

    useEffect(() => {
      setCountry('United States');
      stateListGenerator('United States');
      if (!countryData.length) {
        setCountryData(countryArray);
      }
    }, []);
  }
  countryListGenerator();

  function stateListGenerator(countryName) {
    let tempStateArray = [];
    for (var i = 0; i < countryCity.length; i++) {
      if (countryCity[i].country == countryName) {
        tempStateArray = countryCity[i].states;
      }
    }
    for (var i = 0; i < tempStateArray.length; i++) {
      stateArray.push(
        {
          value: tempStateArray[i],
          label: tempStateArray[i],
        }
      );
    }
    setStateData(stateArray);
  }

  const sayThankyou = () => {

  }

  const handleState = (countryName) => {
    stateListGenerator(countryName);
  }

  /* Dropdown function ends  */
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0e101c" barStyle="light-content" />
      <View style={[styles.goBackButton]}>
          <Button
            icon="arrow-u-left-top"

            onPress={goLinksView}
          >
            View Official Links!
          </Button>
        </View>
      <View>
        <Text style={styles.title}>X-Volt Technology</Text>

      </View>
      <ScrollView>
        <View style={[styles.resetButton]}>
          <Button
            icon="arrow-u-left-top"

            onPress={resetData}
          >
            Reset
          </Button>
        </View>
        <Text style={styles.text}>Full Name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Name'
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="firstName"
          rules={{ required: true }}
        />

        <Text style={styles.text}>Address</Text>

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Address'
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="address"
          rules={{ required: true }}
        />


        <Text style={styles.text}>Country</Text>

        <Dropdown
          style={styles.input}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={countryData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          defaultValue="United States"
          placeholder={!isFocus ? 'Select Country' : '...'}
          searchPlaceholder="Search..."
          value={country}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {

            setCountry(item.value);
            handleState(item.value);
            setIsFocus(false);
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={[{ paddingRight: 5, flex: 1 }]}>
            <Text style={styles.text}>State</Text>

            <Dropdown
              style={styles.inputHalf}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={stateData}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select State' : '...'}
              searchPlaceholder="Search..."
              value={state}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {

                setState(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={[{ paddingLeft: 5, flex: 1 }]}>
            <Text style={styles.text}>Zipcode</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder='Zipcode'
                  style={styles.inputHalf}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  keyboardType='number-pad'
                  value={value}
                />
              )}
              name="zipcode"
              rules={{ required: true }}
            />
          </View>
        </View>
        <Text style={styles.text}>E-Mail</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='E-Mail'
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{ required: true }}
        />

        <Button style={styles.button} icon="send" mode="contained" onPress={handleSubmit(onSubmit)}>
          {submitButtonText}
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  goBackButton: {
    marginTop:10,
    flexDirection: "row",
    color: 'white',
    justifyContent: 'flex-end',
    align: 1,
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },

  //Dropdown Styles End
  resetButton: {
    flexDirection: "row",
    color: 'white',

    justifyContent: 'flex-end',
    align: 1,

  },
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 10,
    radius: 4,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '30%',
    padding: 30,
    backgroundColor: '#0e101c',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 50,
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  inputHalf: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 50,
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  title: {
    color: 'white',
    fontSize: 24,
  },

});

export default CustomForm;