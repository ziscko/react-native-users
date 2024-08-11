import React, {useEffect, useMemo, useState} from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import UserScreen from './UserScreen'

type User = {
  id: string
  name: string
  avatar: string
  createdAt: string
}

const apiURL = 'https://6663665862966e20ef0c7f22.mockapi.io/api/v1'

function HomeScreen({navigation}: {navigation: any}): React.JSX.Element {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>API Users</Text>
      <Text style={styles.subHeader}>Total users: {userCounter}</Text>
      <FlatList
        data={users}
        keyExtractor={item => item?.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.userRow}
            onPress={() =>
              navigation.navigate('User', {
                userId: item.id,
                userName: item.name,
              })
            }>
            <Text style={styles.userId}>{item.id}</Text>
            <Text style={styles.userName}>{item.name}</Text>
            <Image
              style={styles.avatar}
              source={{uri: item.avatar}}
              alt="User Avatar"
            />
            <Text style={styles.createdAt}>
              {new Date(item.createdAt).toDateString()}
            </Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={<Text style={styles.footer}>No more users</Text>}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator()

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 20,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userId: {
    width: 50,
    fontSize: 16,
  },
  userName: {
    width: 100,
    fontSize: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  createdAt: {
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 20,
    color: '#888',
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
})

export default App
