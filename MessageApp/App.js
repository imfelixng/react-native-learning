import {
  StyleSheet,
  View,
} from "react-native";
import React from "react";

import Status from './components/Status.js'

const App = () => {

  renderMessageList = () => {
    return <View style={styles.content} />;
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
