import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Colors, Dim} from '../constants/theme'

export default function Button({title, extraStyles, onPress, children}) {
  if (!children) {
    return (
      <TouchableOpacity style={[styles.button, extraStyles]} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <TouchableOpacity style={[styles.button, extraStyles]} onPress={onPress}>
        {children}
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  button: {
    height: Dim.height * 0.08,
    width: Dim.width * 0.85,
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  title: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
})
