import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ToDoList from './components/ToDoList';

export default function App() {

  const initialTasks = ['Wash dishes', 'Do laundry', 'Take dog for a walk'];

  return (
    <View style={styles.container}>
      <ToDoList initialValues={initialTasks} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
