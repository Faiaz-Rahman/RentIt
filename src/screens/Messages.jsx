import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Messages() {
  return (
    <View style={styles.messages}>
      <Text>Messages</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  messages: {
    flex: 1,
  },
})
