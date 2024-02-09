import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native'
import {Home} from './src/screens'

function App() {
  return <Home />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})

export default App
