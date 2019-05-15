import React from 'react';
import { StyleSheet, View } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm'

const ToggleableTimerForm = (props) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const handleFormOpen = () => {
    setIsOpen(true);
  }

  const handleFormClose = () => {
    setIsOpen(false);
  }

  const handleSubmit = (timer) => {
    props.onSubmitForm(timer);
  }

  return (
    <View style={[styles.container, !isOpen && styles.buttonPadding]}>
      {
        isOpen ? (
        <TimerForm 
          onFormClose = { handleFormClose }
          onFormSubmit = { handleSubmit }
        />
        ) : (
        <TimerButton title="+" color="#000"
          onPress = { handleFormOpen }
        />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});

export default ToggleableTimerForm;