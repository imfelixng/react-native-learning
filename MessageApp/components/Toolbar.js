import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import PropTypes from "prop-types";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";


const ToolbarButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon
      name={title}
      size = {25}
      style = {styles.icon}
    />
  </TouchableOpacity>
);

ToolbarButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const Toolbar = ({
  isFocused,
  onChangeFocus = () => {},
  onSubmit = () => {},
  onPressCamera = () => {},
  onPressLocation = () => {}
}) => {
  const [text, setText] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef();

  const handleChangeText = text => {
    setText(text);
  };

  const handleSubmitEditing = () => {
    if (!text) return;
    onSubmit(text);
    setText("");
  };

  if (isFocused !== focused) {
    if(isFocused) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
    setFocused(isFocused);
  }

  const handleFocus = () => {
    onChangeFocus(true);
  };

  const handleBlur = () => {
    onChangeFocus(false);
  };

  return (
    <View style={styles.toolbar}>
      <ToolbarButton title={"md-camera"} onPress={onPressCamera} />
      <ToolbarButton title={"md-locate"} onPress={onPressLocation} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          underlineColorAndroid={"transparent"}
          placeholder={"Type something!"}
          blurOnSubmit={false}
          value={text}
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmitEditing}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
    </View>
  );
};

Toolbar.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  onChangeFocus: PropTypes.func,
  onSubmit: PropTypes.func,
  onPressCamera: PropTypes.func,
  onPressLocation: PropTypes.func
};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingLeft: 16,
    backgroundColor: "white"
  },
  button: {
    top: -2,
    marginRight: 12,
    fontSize: 20,
    color: "grey"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.04)",
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 12,
    backgroundColor: "rgba(0,0,0,0.02)"
  },
  input: {
    flex: 1,
    fontSize: 18
  },
  icon: {
    margin: 5
  }
});

export default Toolbar;
