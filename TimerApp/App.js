import React from 'react';
import {
  StyleSheet, Text, View,
  ScrollView
} from 'react-native';
import uuidv4 from 'uuid/v4';

import { ToggleableTimerForm, EditableTimer } from './components';

import { newTimer } from './utils/TimerUtils';

const App = () => {

  const [timers, setTimers] = React.useState(
    [
      {
        title: 'Mow the lawn',
        project: 'House Chores',
        id: uuidv4(),
        elapsed: 5456099,
        isRunning: true,
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidv4(),
        elapsed: 1273998,
        isRunning: false,
      },
    ]
  )

  const handleToggleFormSubmit = (timer) => {
    if (!timer.id) {
      const newTimers = [newTimer(timer), ...timers];
      setTimers(newTimers);
    } else {
      const newTimers = timers.map(timerItem => {
        if (timer.id === timerItem.id) {
          return {
            ...timerItem,
            title: timer.title,
            project: timer.project
          };
        }
        return timerItem;
      });
      setTimers(newTimers);
    }
  }

  const handleRemoveTimer = (id) => {
    alert(id);
  }

  return (
    <View style = {styles.appContainer} >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm
          onSubmitForm = { handleToggleFormSubmit }
        />
        {
          timers.map(timer => {
            return (
              <EditableTimer
                key = {timer.id}
                id={timer.id}
                title={timer.title}
                project={timer.project}
                elapsed={timer.elapsed}
                isRunning={timer.isRunning}
                onSubmitForm = { handleToggleFormSubmit }
                onRemove = { handleRemoveTimer }
              />
            )
          })
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
});

export default App;
