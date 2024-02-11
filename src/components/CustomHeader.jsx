import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {Colors, Dim} from '../constants/theme'

import AntDesign from 'react-native-vector-icons/AntDesign'

import {useNavigation} from '@react-navigation/native'

export default function CustomHeader({title, fav, onPress}) {
  const nav = useNavigation()

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          nav.goBack()
        }}>
        <AntDesign name="arrowleft" size={20} color={'#000'} />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.favOuterContainer}>
        <TouchableOpacity
          onPress={onPress}
          style={fav ? styles.favContainer : null}>
          <AntDesign name="heart" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  favContainer: {
    height: 40,
    width: 40,
    backgroundColor: Colors.lightPrimaryOpacity,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  favOuterContainer: {
    height: 50,
    width: 50,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: Dim.height * 0.1,
    // backgroundColor: '#f4f4f4',
    width: Dim.width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
  },
  headerText: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    color: '#000',
  },
})
