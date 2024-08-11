import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

function UserScreen({route}: {route: any}): React.JSX.Element {
  const {userId, userName} = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Details</Text>
      <Text style={styles.info}>ID: {userId}</Text>
      <Text style={styles.info}>Name: {userName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 5,
  },
})

export default UserScreen
