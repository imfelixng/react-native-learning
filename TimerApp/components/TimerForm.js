import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton';

const TimerForm = (
  {
    id,
    title,
    project,
    onFormClose,
    onFormSubmit
  }
) => {

  const [titleF, setTitleF] = React.useState(id ? title : '');
  const [projectF, setProjectF] = React.useState(id ? project : '');

  const handleTitleChange = (newTitle) => {
    setTitleF(newTitle);
  }

  const handleProjectChange = (newProject) => {
    setProjectF(newProject);
  }

  const handleSubmit = () => {
    const timer = {
      id,
      title: titleF,
      project: projectF
    }

    onFormSubmit(timer);
    onFormClose();
  }

  const submitText = id ? 'Update' : 'Create';
  return (
    <View style = { styles.formContainer } >
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value = {titleF}
            onChangeText = { handleTitleChange }
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value = {projectF}
            onChangeText = { handleProjectChange }
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton small color="#21BA45" title={submitText} onPress = { handleSubmit } />
        <TimerButton small color="#DB2828" title="Cancel" onPress = { onFormClose }/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputContainer: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TimerForm;