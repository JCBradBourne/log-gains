import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.header}>
       <Text>Pick your workout.</Text>
      </View>
      <View >
        <TouchableOpacity style={styles.list}>
          <Text style={styles.text}>
            Push Pull Legs
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity style={styles.list}>
          <Text style={styles.text}>
            Splits
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity style={styles.list}>
          <Text style={styles.text}>
            Muscle Specific Workouts
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

