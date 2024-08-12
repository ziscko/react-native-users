import React, {useEffect, useMemo, useState} from 'react'
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import {commonStyles, homeScreenStyles} from '../styles/styles'
import {User} from '../types/users'
import {useUser} from '../context/UserContext'

const apiURL = 'https://6663665862966e20ef0c7f22.mockapi.io/api/v1'

function HomeScreen({navigation}: {navigation: any}): React.JSX.Element {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const {setUser} = useUser()

  useEffect(() => {
    fetch(`${apiURL}/products`)
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(e => {
        console.error('Error fetching data -->', e)
        setError('Failed to load data')
        setLoading(false)
      })
  }, [])

  const userCounter = useMemo(() => users.length, [users])

  if (loading) {
    return (
      <View style={commonStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={commonStyles.container}>
        <Text style={homeScreenStyles.error}>{error}</Text>
      </View>
    )
  }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>API Users</Text>
      <Text style={commonStyles.subHeader}>Total users: {userCounter}</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <FlatList
        data={users}
        keyExtractor={item => item?.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={homeScreenStyles.userRow}
            onPress={() => {
              setUser(item)
              navigation.navigate('User', {
                userId: item.id,
                userName: item.name,
              })
            }}>
            <Text style={homeScreenStyles.userId}>{item.id}</Text>
            <Text style={homeScreenStyles.userName}>{item.name}</Text>
            <Image
              style={homeScreenStyles.avatar}
              source={{uri: item.avatar}}
              alt="User Avatar"
            />
            <Text style={homeScreenStyles.createdAt}>
              {new Date(item.createdAt).toDateString()}
            </Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <Text style={homeScreenStyles.footer}>No more users</Text>
        }
      />
    </View>
  )
}

export default HomeScreen
