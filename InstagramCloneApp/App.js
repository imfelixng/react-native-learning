import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Modal,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Feed from './screens/Feed';
import Comments from './screens/Comments';


const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

const App = () => {

  const [showModal, setShowModal] = React.useState(false);
  const [selectedItemId, setSelectedItemId] = React.useState(null);
  const [commentsForItem, setCommentsForItem] = React.useState({});

  const openCommentScreen = (id) => {
    setShowModal(true);
    setSelectedItemId(id);
  }

  const closeCommentScreen = (id) => {
    setShowModal(false);
    setSelectedItemId(null);
  }

  const onSubmitComment = async text => {
    const comments = commentsForItem[selectedItemId] || [];
    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    };
    setCommentsForItem(updated);

    try {
      await AsyncStorage.setItem(
        ASYNC_STORAGE_COMMENTS_KEY,
        JSON.stringify(updated),
      );
    } catch (e) {
      console.log(
      'Failed to save comment',
      text,
      'for',
      selectedItemId,
      );
    }
  }

  React.useEffect(() => {
    (async () => {
      try {
        const commentsForItem = await AsyncStorage.getItem(
          ASYNC_STORAGE_COMMENTS_KEY,
        );
        setCommentsForItem(
          commentsForItem
          ? JSON.parse(commentsForItem)
          : {}
        );
      } catch (e) {
        console.log('Failed to load comments');
      }
    })();
  }, []);

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
          onSubmitComment={onSubmitComment}
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