import React, {useState} from 'react'
import {Text, View, Button, TextInput, Alert} from 'react-native'
import {commonStyles} from '../styles/styles'
import withAuth from '../hocs/withAuth'

interface LoginScreenProps {
  isAuthenticated: boolean
  userName: string | null
  login: (username: string) => void
  logout: () => void
  navigation: any
}

const LoginScreen = ({
  isAuthenticated,
  userName,
  login,
  logout,
  navigation,
}: LoginScreenProps) => {
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const gotoScreen = (screenName: string) => {
    navigation.navigate(screenName)
  }

  const handleLogin = () => {
    if (usernameInput.trim() === '') {
      Alert.alert('Validation Error', 'Please enter a username')
      return
    }
    login(usernameInput)
  }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>
        {isAuthenticated ? `Welcome, ${userName}` : 'Please log in'}
      </Text>
      {!isAuthenticated ? (
        <View>
          <Text style={[commonStyles.smallText, commonStyles.pb2]}>
            You can use any username or password
          </Text>
          <TextInput
            style={commonStyles.input}
            placeholder="Username"
            value={usernameInput}
            onChangeText={setUsernameInput}
          />
          <TextInput
            style={commonStyles.input}
            placeholder="Password"
            secureTextEntry
            value={passwordInput}
            onChangeText={setPasswordInput}
          />
          <Button title="Log In" onPress={handleLogin} />
        </View>
      ) : (
        <View>
          <Button title="View Users List" onPress={() => gotoScreen('Home')} />
          <Button
            title="Go to Counter Screen"
            onPress={() => gotoScreen('Counter')}
          />
          <Button
            title="Go to Tasks Screen"
            onPress={() => gotoScreen('Tasks')}
          />
          <Button title="Log Out" onPress={() => logout()} />
        </View>
      )}
    </View>
  )
}

export default withAuth(LoginScreen)
