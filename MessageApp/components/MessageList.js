import React from "react";
import {
  FlatList, StyleSheet,
  View, TouchableOpacity, Image, Text,
  ActivityIndicator,
  BackHandler
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import PropTypes from "prop-types";
import { MessageShape } from "../utils/MessageUtils";

const keyExtractor = item => item.id.toString();

const MessageList = ({ messages, onPressMessage = () => {} }) => {

  const [ loading, setLoading ] = React.useState(true);

  renderMessageBody = ({ type, text, uri, coordinate }) => {
    switch (type) {
      case "text":
        return (
          <View style={styles.messageBubble}>
            <Text style={styles.text}>{text}</Text>
          </View>
        );
      case "image":
        return (
          <View style={styles.image}>
            {
              loading && (
                <ActivityIndicator
                  style = { StyleSheet.absoluteFill }
                />
              )
            }
            <Image
              source={{ uri }}
              onLoad = { () =>  setLoading(false)}
              style = { StyleSheet.absoluteFill }
            />
          </View>
        )
      case "location":
        return (
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              ...coordinate,
              latitudeDelta: 0.08,
              longitudeDelta: 0.04
            }}
          >
            <MapView.Marker coordinate={coordinate} />
          </MapView>
        );
      default:
        return null;
    }
  };

  renderMessageItem = ({ item }) => {
    return (
      <View key={item.id} style={styles.messageRow}>
        <TouchableOpacity onPress={() => onPressMessage(item)}>
          {renderMessageBody(item)}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      inverted // keo xuong duoi khi co message moi
      data={messages}
      renderItem={this.renderMessageItem}
      keyExtractor={keyExtractor}
      keyboardShouldPersistTaps={"handled"}
    />
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(MessageShape).isRequired,
  onPressMessage: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "visible"
  },
  messageRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 4,
    marginRight: 10,
    marginLeft: 60
  },
  messageBubble: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "rgb(16,135,255)",
    borderRadius: 20
  },
  text: {
    fontSize: 18,
    color: "#fff"
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    overflow: "hidden"
  },
  map: {
    width: 250,
    height: 250,
    borderRadius: 10
  }
});

export default MessageList;
