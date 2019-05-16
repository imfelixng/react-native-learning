import React, {Component} from 'react';
import {
  Platform, StyleSheet,
  Text, View,
  SafeAreaView
} from 'react-native';

import Card from './components/Card';

const App = () => {
  return (
    <SafeAreaView style = { styles.container }>
      <Card 
        fullname = 'An Nguyen Quang'
        linkText={'Comments'}
        onPressLinkText={() => {
          alert('Pressed link!');
        }}
        image={{ uri: 'https://unsplash.it/600/600' }}
      />
      <Card 
        fullname = 'An Nguyen Quang'
        linkText={'Comments'}
        onPressLinkText={() => {
          alert('Pressed link!');
        }}
        image={{ uri: 'https://unsplash.it/600/600' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },
});

export default App;