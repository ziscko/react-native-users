import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Provider} from 'react-redux'
import {store} from './src/store/store'
import {UserProvider} from './src/context/UserContext'
import HomeScreen from './src/screens/HomeScreen'
import UserScreen from './src/screens/UserScreen'
import LoginScreen from './src/screens/LoginScreen'
import CounterScreen from './src/screens/CounterScreen'

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Counter" component={CounterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </Provider>
  )
}

export default App
