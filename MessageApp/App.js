import { StyleSheet, View } from "react-native";
import React from "react";

import Status from "./components/Status.js";

import MessageList from "./components/MessageList";
import {
  createImageMessage,
  createLocationMessage,
  createTextMessage
} from "./utils/MessageUtils";

const App = () => {
  const [messages, setMessages] = React.useState([
    createImageMessage("https://unsplash.it/300/300"),
    createTextMessage("World"),
    createTextMessage("Hello"),
    createLocationMessage({
      latitude: 16.078570199999998,
      longitude: 108.14824949999999
    })
  ]);

  const handlePressMessage = () => {}

  renderMessageList = () => {
    return (
      <View style={styles.content}>
        <MessageList
          messages={messages}
          onPressMessage={handlePressMessage}
        />
      </View>
    );
  };
  renderInputMethodEditor = () => {
    return <View style={styles.inputMethodEditor} />;
  };
  renderToolbar = () => {
    return <View style={styles.toolbar} />;
  };

  return (
    <View style={styles.container}>
      <Status />
      {renderMessageList()}
      {renderToolbar()}
      {renderInputMethodEditor()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    flex: 1,
    backgroundColor: "#fff"
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: "#fff"
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.04)",
    backgroundColor: "#fff"
  }
});

export default App;
