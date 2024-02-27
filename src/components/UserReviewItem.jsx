import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Dim, Colors, ListColorsArray} from '../constants/theme'
import LinearGradient from 'react-native-linear-gradient'

export default function UserReviewItem({index}) {
  return (
    <LinearGradient
      colors={[ListColorsArray[index % 4], ListColorsArray[index % 4]]}
      style={styles.userReviewItem}>
      <Text>UserReviewItem</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  userReviewItem: {
    height: Dim.height * 0.1,
    width: Dim.width * 0.84,
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    overflow: 'hidden',
  },
})
