import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {ColorsArray, Dim} from '../constants/theme'

import LinearGradient from 'react-native-linear-gradient'

export default function ListItem({index}) {
  return (
    <View style={[styles.listItem]}>
      <LinearGradient
        colors={[...ColorsArray[index % 4]]}
        style={styles.gradient}>
        <Text>{index + 1}</Text>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    height: Dim.height * 0.15,
    width: Dim.height * 0.15,
    // backgroundColor: 'pink',

    marginRight: 10,
    borderRadius: 7,
  },
  gradient: {
    height: '100%',
    width: '100%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
