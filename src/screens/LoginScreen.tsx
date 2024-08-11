import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Text, View, Button, TextInput, Alert} from 'react-native'
import {RootState} from '../store/store'
import {login, logout} from '../store/store'
import {commonStyles} from '../styles/styles'

function LoginScreen({navigation}: {navigation: any}): React.JSX.Element {
  const dispatch = useDispatch()
  const {isAuthenticated, userName} = useSelector(
    (state: RootState) => state.auth,
  )

  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const gotoUsersList = () => {
    navigation.navigate('Home')
  }

  const handleLogin = () => {
    if (usernameInput.trim() === '') {
      Alert.alert('Validation Error', 'Please enter a username')
      return
    }
    dispatch(login(usernameInput))
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
          <Button title="View Users List" onPress={() => gotoUsersList()} />
          <Button title="Log Out" onPress={() => dispatch(logout())} />
        </View>
      )}
    </View>
  )
}

export default LoginScreen
