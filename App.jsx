import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native'
import {Home} from './src/screens'

import {BottomTab} from './src/navigation/BottomTab'
import {NavigationContainer} from '@react-navigation/native'

function App() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  )
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
