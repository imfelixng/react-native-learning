import React from 'react';
import {
  StyleSheet, Text, View, Platform,
  ImageBackground,
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather';

import { SearchInput } from './components';

const App = () => {
  return (
    <ImageBackground
      source = { getImageForWeather('Clear') }
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.container}>
        <Text
          style = {[styles.largeText, styles.textStyle]}
        >
          San Francisco
        </Text>
        <Text style={[styles.smallText, styles.textStyle]}>
          Light Cloud
        </Text>
        <Text style={[styles.largeText, styles.textStyle]}>
          24°
        </Text>
        <SearchInput 
          placeholder = "Search city"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily:
      Platform.OS === 'ios' ? 'AvenirNext-Regular': 'Roboto'
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});

export default App;