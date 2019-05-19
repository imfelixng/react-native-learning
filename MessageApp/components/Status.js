import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import React from "react";

import NetInfo from "@react-native-community/netinfo";

import { getStatusBarHeight } from "react-native-status-bar-height";

const Status = () => {
  const [isConnected, setIsConnected] = React.useState(true);
  const backgroundColor = isConnected ? "transparent" : "red";

  React.useEffect(() => {
    (async () => {
      const isConnected = await NetInfo.isConnected.fetch();
      setIsConnected(isConnected);
    })()

    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe && unsubscribe();
    }
  }, [])

  const statusBar = (
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle={isConnected ? "dark-content" : "light-content"}
      animated={false}
    />
  );

  const messageContainer = (
    <View style={styles.messageContainer} pointerEvents={"none"}>
      {statusBar}
      {!isConnected && (
        <View style={styles.bubble}>
          <Text style={styles.text}>No network connection</Text>
        </View>
      )}
    </View>
  );

  if (Platform.OS === "ios") {
    return (
      <View style={[styles.status, { backgroundColor }]}>
        {messageContainer}
      </View>
    );
  }
  return messageContainer;
};

const styles = StyleSheet.create({
  status: {
    zIndex: 1,
    height: getStatusBarHeight()
  },
  messageContainer: {
    zIndex: 1,
    position: "absolute",
    top: getStatusBarHeight() + 20,
    right: 0,
    left: 0,
    height: 80,
    alignItems: "center"
  },
  bubble: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "red"
  },
  text: {
    color: "white"
  }
});

export default Status;
