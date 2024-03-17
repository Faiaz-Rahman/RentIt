import {View, Text, StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Colors, Dim, ListColorsArrayReviews} from '../constants/theme'
import {Header, InputContainer} from '../components'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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

      <View style={styles.listContainer}></View>

      {/* {inputContainerWithIndex(0, 'Name of your book')}
      {inputContainerWithIndex(1, 'Rent price in USD')} */}
      <InputContainer
        index={0}
        title={'Name of your book'}
        bgColor={ListColorsArrayReviews[0][0]}>
        <MaterialCommunityIcons
          name="book-alphabet"
          size={25}
          color={ListColorsArrayReviews[0][1]}
        />
      </InputContainer>

      <InputContainer
        index={1}
        title={'Rent price in USD'}
        bgColor={ListColorsArrayReviews[1][0]}>
        <MaterialCommunityIcons
          name="book-alphabet"
          size={25}
          color={ListColorsArrayReviews[1][1]}
        />
      </InputContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  addNew: {
    flex: 1,
    backgroundColor: Colors.homeBg,
    position: 'relative',
  },
  listContainer: {
    position: 'absolute',
    top: Dim.height * 0.15,
    height: Dim.height * 0.85,
    width: Dim.width,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
})
