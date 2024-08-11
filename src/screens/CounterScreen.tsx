import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {View, Text, Button, StyleSheet} from 'react-native'
import {RootState, AppDispatch} from '../store/store'
import {increment, decrement, reset} from '../store/counterSlice'

const CounterScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const value = useSelector((state: RootState) => state.counter.value)

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{value}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 48,
    marginBottom: 20,
  },
})

export default CounterScreen
