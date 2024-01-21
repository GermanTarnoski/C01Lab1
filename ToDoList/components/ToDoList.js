import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import AddTask from './AddTask';


const ToDoList = ({ initialValues }) => {
  const [toDos, setToDos] = useState(
    initialValues.map((title) => ({ id: uuidv4(), title }))
  );

  const addToDo = (newTitle) => {
    const newToDo = { id: uuidv4(), title: newTitle };
    setToDos((prevToDos) => [...prevToDos, newToDo]);
  };

  const removeToDo = (id) => {
    setToDos((prevToDos) => prevToDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <View style={styles.container}>
        <AddTask onAddTask={addToDo} />
      {toDos.map((toDo) => (
        <View key={toDo.id}>
          <Text style={styles.text}>Task: {toDo.title}</Text>
          <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
        </View>
      ))}
    </View>
  );
};

ToDoList.defaultProps = {
  initialValues: [],
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;