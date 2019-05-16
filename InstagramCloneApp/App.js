import React, {Component} from 'react';
import {
  Platform, StyleSheet,
  Text, View,
  SafeAreaView
} from 'react-native';
import Avatar from './components/Avatar';

const App = () => {
  return (
    <SafeAreaView style = { styles.container }>
      <Avatar
      initials="FL"
      size={35}
      backgroundColor={'teal'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

export default App;