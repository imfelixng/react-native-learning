import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TimerButton = (
  {
    color,
    title,
    small,
    disabled,
    onPress
  }
) => {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: disabled ? '#cdcdcd' : color }]}
      onPress={ !disabled ? onPress : null}
      activeOpacity = { disabled ? 1 : 0.2 }
    >
      <Text
        style={
          [
            styles.buttonText,
            small ? styles.small : styles.large,
            { color: disabled ? '#cdcdcd' : color },
          ]
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3,
  },
  small: {
    fontSize: 14,
    padding: 5,
  },
  large: {
    fontSize: 16,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default TimerButton;