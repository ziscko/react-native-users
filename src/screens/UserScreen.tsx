import React from 'react'
import {View, Text, Image} from 'react-native'
import {
  commonStyles,
  userScreenStyles,
  homeScreenStyles,
} from '../styles/styles'
import {useUser} from '../context/UserContext'

function UserScreen(): React.JSX.Element {
  const {user} = useUser()

  if (!user) {
    return (
      <View style={commonStyles.container}>
        <Text style={commonStyles.header}>No user selected</Text>
      </View>
    )
  }

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.header}>User Details</Text>
      <Text style={userScreenStyles.userInfo}>ID: {user.id}</Text>
      <Text style={userScreenStyles.userInfo}>Name: {user.name}</Text>
      <Image
        style={homeScreenStyles.avatarImg}
        source={{uri: user.avatar}}
        alt="User Avatar"
      />
    </View>
  )
}

export default UserScreen
