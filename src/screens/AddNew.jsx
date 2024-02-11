import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function AddNew() {
  return (
    <View style={styles.addNew}>
      <Text>AddNew</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  addNew: {
    flex: 1,
  },
})
