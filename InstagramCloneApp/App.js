import React, {Component} from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Feed from './screens/Feed';

const App = () => {
  const items = [
    { id: 0, author: 'Bob Ross' },
    { id: 1, author: 'Chuck Norris' },
  ];
  return (
    <SafeAreaView style = { styles.container }>
      <Feed 
        items = { items }
        style = { styles.feed }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff'
  },
  feed: {
    flex: 1
  }
});

export default App;