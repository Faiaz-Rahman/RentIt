import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function Favorites() {
  return (
    <View style={styles.favorite}>
      <Text>Favorites</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  favorite: {
    flex: 1,
  },
})
