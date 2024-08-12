import React from 'react'
import {View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {RootState, AppDispatch} from '../store/store'
import {addTask, removeTask, toggleTaskCompletion} from '../store/tasksSlice'
import {commonStyles} from '../styles/styles'

const TaskListScreen = () => {
  const dispatch: AppDispatch = useDispatch()
  const tasks = useSelector((state: RootState) => state.tasks.tasks)

  const handleAddTask = () => {
    dispatch(addTask({title: 'New Task'}))
  }

  const handleToggleTask = (id: number) => {
    dispatch(toggleTaskCompletion(id))
  }

  const handleRemoveTask = (id: number) => {
    dispatch(removeTask(id))
  }

  return (
    <View style={commonStyles.container}>
      <Button title="Add Task" onPress={handleAddTask} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() => handleToggleTask(item.id)}
              style={{
                backgroundColor: item.completed ? 'green' : 'red',
                padding: 10,
                borderRadius: 5,
                marginRight: 10,
              }}>
              <Text style={{color: 'white'}}>
                {item.completed ? 'Completed' : 'Pending'}
              </Text>
            </TouchableOpacity>
            <Text style={{flex: 1}}>{item.title}</Text>
            <Button title="Remove" onPress={() => handleRemoveTask(item.id)} />
          </View>
        )}
      />
    </View>
  )
}

export default TaskListScreen
