import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Profile() {
  return (
    <View style={styles.profile}>
      <Text>Profile</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  profile: {
    flex: 1,
  },
})
