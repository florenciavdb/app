import React, { useState} from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import { AddTask, CustomModal, RenderItem, CustomFlatList } from './components/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffcf7',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: '#e4f0d0',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    color: '#738290',
    fontWeight: 'bold',
  },
  modalMessageContainer : {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#738290',
  },
  selectedTask: {
    fontSize: 20,
    color: '#738290',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});


export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleChangeText = (text) => {
    console.warn('text', text);
    setTask(text);
  }

  const addItem = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Date.now(), value: task },
    ]);
    setTask('');
  }

  const onHandleModal = (id) => {
    setModalVisible(!modalVisible);
    setSelectedTask(tasks.find((item) => item.id === id))
  }

  const renderItem = ({ item }) => (
    <RenderItem 
      key={item.id} 
      item={item} 
      onPress={() => onHandleModal(item.id)}
      />
  )

  const onHandleDeleteItem = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    setSelectedTask(null);
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.container}>
      <AddTask 
        item={task}
        onChangeText={onHandleChangeText}
        placeholder='new task'
        addItem={addItem}
        selectionColor='#4A306D'
        placeholderTextColor='#738290'
        textButton='ADD'
        color='#738290'
      />
      <CustomFlatList
        data={tasks}
        renderItem={renderItem}
      />
      <CustomModal animationType='slide' visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>DETAILS</Text>
        <View style={styles.modalMessageContainer}> 
          <Text style={styles.modalMessage}>Are you sure you want to delete?</Text>
        </View>
        <View style={styles.modalMessageContainer}> 
          <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Delete' onPress={() => onHandleDeleteItem(selectedTask?.id)} color='#738290'/>
          <Button title='Cancel' onPress={() => setModalVisible(!modalVisible)} color='#738290' />
        </View>
        </View>
      </CustomModal>
    </View>
  );
}