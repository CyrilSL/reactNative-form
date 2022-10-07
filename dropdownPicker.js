import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import countryCity from './json/countryCity.json'

const DropdownComponent = () => {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);


  const [isFocus, setIsFocus] = useState(false);


  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const countryCount = Object.keys(countryCity).length;

  const countryArray = [];
  var stateArray = [];

  
  function countryListGenerator() {
    for (var i = 0; i < countryCity.length; i++) {
      countryArray.push(
        {
          value: countryCity[i].country,
          label: countryCity[i].country
        }
      );
    }

    useEffect(() => {
      if (!countryData.length) {
        setCountryData(countryArray);
      }
    }, []);
  }
  countryListGenerator();

  function stateListGenerator(countryName) {
    let tempStateArray=[];
    for(var i = 0; i<countryCity.length;i++ )
    {
      if(countryCity[i].country==countryName)
      {
        tempStateArray=countryCity[i].states;
      }
    }
    for(var i=0;i<tempStateArray.length;i++)
    {
      stateArray.push(
        {
          value: tempStateArray[i] ,
          label: tempStateArray[i] ,
        }
      );
    }
    setStateData(stateArray);
  }

  const handleState = (countryName) =>
  {
    stateListGenerator(countryName);
  }

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={countryData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
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

      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
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
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginTop: 20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
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
});