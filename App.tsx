import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { store, persistor } from './src/store/store'
import { UserProvider } from './src/context/UserContext'
import HomeScreen from './src/screens/HomeScreen'
import UserScreen from './src/screens/UserScreen'
import LoginScreen from './src/screens/LoginScreen'
import CounterScreen from './src/screens/CounterScreen'
import TaskListScreen from './src/screens/TaskListScreen'
import { PersistGate } from 'redux-persist/integration/react'

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <UserProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="User" component={UserScreen} />
              <Stack.Screen name="Counter" component={CounterScreen} />
              <Stack.Screen name="Tasks" component={TaskListScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </UserProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
