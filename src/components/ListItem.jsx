import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import {ColorsArray, Dim} from '../constants/theme'

import LinearGradient from 'react-native-linear-gradient'

export default function ListItem({index}) {
  const imageArr = [
    require('../../assets/images/adventure.png'),
    require('../../assets/images/fiction.png'),
    require('../../assets/images/horror.png'),
    require('../../assets/images/love.png'),
  ]

  const textArr = ['Adventure', 'Fiction', 'Horror', 'Love']

  return (
    <View style={[styles.listItem]}>
      <LinearGradient
        colors={[...ColorsArray[index % 4]]}
        style={styles.gradient}>
        <Image
          source={imageArr[index % 4]}
          style={styles.imageListItemBookType}
          resizeMode="contain "
        />

        <Text style={styles.bookTypeStyle}>{textArr[index % 4]}</Text>
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
  imageListItemBookType: {
    height: '50%',
    width: '50%',
    transform: [{rotateZ: '-5deg'}],
  },
  bookTypeStyle: {
    fontSize: 11,
    fontFamily: 'Roboto-Bold',
    color: '#000',
    marginTop: 7,
  },
})
