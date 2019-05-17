import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Modal
} from 'react-native';

import Feed from './screens/Feed';
import Comments from './screens/Comments';

const App = () => {

  const [showModal, setShowModal] = React.useState(false);
  const [selectedItemId, setSelectedItemId] = React.useState(null);
  const [commentsForItem, setCommentsForItem] = React.useState({});

  const openCommentScreen = (id) => {
    setShowModal(true);
    setCommentsForItem(id);
  }

  const closeCommentScreen = (id) => {
    setShowModal(false);
    setCommentsForItem(null);
  }

  return (
    <SafeAreaView style = { styles.container }>
      <Feed 
        style = { styles.feed }
        commentsForItem={commentsForItem}
        onPressComments={openCommentScreen}
      />
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={closeCommentScreen}
        style={styles.container}
      >
        <Comments
          style={styles.comments}
          comments={commentsForItem[selectedItemId] || []}
          onClose={closeCommentScreen}
        />
      </Modal>
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
  },
  comments: {
    flex: 1,
  },
});

export default App;