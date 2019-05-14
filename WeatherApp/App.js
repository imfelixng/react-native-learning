import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';

import { SearchInput } from './components';

const App = () => {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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