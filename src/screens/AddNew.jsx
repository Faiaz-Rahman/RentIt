import {View, Text, StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Colors} from '../constants/theme'
import {Header} from '../components'

export default function AddNew() {
  return (
    <SafeAreaView
      style={styles.addNew}
      initialMetrics={{
        insets: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      }}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      <Header />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  addNew: {
    flex: 1,
    backgroundColor: Colors.homeBg,
    position: 'relative',
  },
})
