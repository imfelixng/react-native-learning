import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Feed from './screens/Feed';

const App = () => {

  const [showModal, setShowModal] = React.useState(false);
  const [selectedItemId, setSelectedItemId] = React.useState(null);
  const [commentsForItem, setCommentsForItem] = React.useState({});

  const openCommentScreen = (id) => {
    setShowModal(true);
    setCommentsForItem(id);
  }

  const openCommentScreen = (id) => {
    setShowModal(false);
    setCommentsForItem(null);
  }

  return (
    <SafeAreaView style = { styles.container }>
      <Feed 
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