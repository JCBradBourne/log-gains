import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

function App() {
  const [pickedWorkouts, setPickedWorkouts] = useState([])
  const [workout, setWorkout] = useState('')

  const addGoalHandler = () => {

    setPickedWorkouts([...pickedWorkouts, workout]);
  }
  return (

    <View>
      <View style={styles.header}>
       <Text>Pick your workout.</Text>
      </View>
      <View >
        <TouchableOpacity style={styles.list} onPress={() => setWorkout('Push Pull Legs')}>
          <Text style={styles.text}>
            Push Pull Legs
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity style={styles.list} onPress={() => setWorkout('Splits')}>
          <Text style={styles.text} value={workout}>
            Splits
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity style={styles.list} onPress={() => setWorkout('Muscle Specific Workouts')}>
          <Text style={styles.text}>
            Muscle Specific Workouts
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity style={styles.list} onPress={() => console.log(workout)}>
          <Text style={styles.text}>
            Print State
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  screen: {

  },
  header: {
    alignItems: "center",
    paddingVertical: '20%'
    
  },
  list: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 30,
    minHeight: 50,
    backgroundColor: "#cc0000",
  },
  text: {
    color: 'white',
    fontSize: 18

  }
})
export default App;

