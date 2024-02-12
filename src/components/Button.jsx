import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Colors, Dim} from '../constants/theme'

export default function Button({title, extraStyles, onPress}) {
  return (
    <TouchableOpacity style={[styles.button, extraStyles]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    height: Dim.height * 0.1,
    width: Dim.width * 0.85,
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  title: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
})
