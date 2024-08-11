import React from 'react'
import {View, Text} from 'react-native'
import {commonStyles, userScreenStyles} from '../styles/styles'

function UserScreen({route}: {route: any}): React.JSX.Element {
  const {userId, userName} = route.params

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>User Details</Text>
      <Text style={userScreenStyles.userInfo}>ID: {userId}</Text>
      <Text style={userScreenStyles.userInfo}>Name: {userName}</Text>
    </View>
  )
}

export default UserScreen
