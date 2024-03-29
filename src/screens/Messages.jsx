import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import {SafeAreaView} from 'react-native-safe-area-context'

import {AvailableItem, Header, MessagesItem} from '../components'
import {Colors, Dim} from '../constants/theme'
import {useNavigation} from '@react-navigation/native'

export default function Messages() {
  const favArr = Array.from({length: 10}, (v, i) => i + 1)
  const navigation = useNavigation()

  return (
    <SafeAreaView
      style={styles.messages}
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
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: Dim.height * 0.03,
            paddingBottom: Dim.height * 0.1,
          }}
          initialNumToRender={8}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('message_details')
                }}>
                <MessagesItem index={index} />
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  messages: {
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
