import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native'

import {SafeAreaView} from 'react-native-safe-area-context'
import {AvailableItem, Header} from '../components'
import {Colors, Dim} from '../constants/theme'

export default function Favorites() {
  const favArr = Array.from({length: 10}, (v, i) => i + 1)
  // console.log(favArr)

  return (
    <SafeAreaView
      style={styles.favorite}
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

      <View style={styles.listContainer}>
        <FlatList
          data={favArr}
          contentContainerStyle={{
            paddingTop: Dim.height * 0.03,
            paddingBottom: Dim.height * 0.1,
          }}
          initialNumToRender={8}
          renderItem={({item, index}) => {
            return (
              <AvailableItem
                key={index}
                extraStyle={{
                  marginBottom: 10,
                }}
                differentColors={true}
                index={index}
              />
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  favorite: {
    flex: 1,
    backgroundColor: Colors.homeBg,
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
