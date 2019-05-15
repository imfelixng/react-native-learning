import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { millisecondsToHuman } from '../utils/TimerUtils';
import TimerButton from './TimerButton';

const Timer = (
  {
    id,
    title,
    project,
    elapsed,
    openEditForm,
    onRemove
  }
) => {
  
  const handleRemoveTimer = () => {
    onRemove(id);
  }
  
  const elapsedString = millisecondsToHuman(elapsed);
  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color="blue" small title="Edit" onPress = { openEditForm } />
        <TimerButton color="#ff0000" small title="Remove" onPress = { handleRemoveTimer }/>
      </View>
      <TimerButton color="#21BA45" title="Start" />
    </View>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default Timer;