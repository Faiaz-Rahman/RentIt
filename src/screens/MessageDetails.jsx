import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Header, MessageDetailItem, MessagesItem} from '../components'
import {Colors, Dim} from '../constants/theme'
import {useNavigation} from '@react-navigation/native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function MessageDetails() {
  const favArr = Array.from({length: 15}, (v, i) => i + 1)
  const navigation = useNavigation()

  const [messageText, setMessageText] = useState('')
  const [bottom, setBottom] = useState(Dim.height * 0.11)

  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      console.log('keyboard is open!')
      const metrics = Keyboard.metrics()
      // console.log('keyboard while open => metrics =>', metrics)
      const bottomHeight = Dim.height - metrics.height
      setBottom(bottomHeight)
    })
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      // console.log('keyboard hidden ...')
      setBottom(Dim.height * 0.11)
    })
    return () => {
      showKeyboard.remove()
      hideKeyboard.remove()
    }
  }, [])

  return (
    <SafeAreaView
      style={styles.messageDetails}
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

      <Header
        backEnabled={true}
        onBackPress={() => {
          navigation.goBack()
        }}
      />

      <View style={styles.listContainer}>
        <FlatList
          data={favArr}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: Dim.height * 0.03,
            paddingBottom: Dim.height * 0.2,
          }}
          initialNumToRender={8}
          renderItem={({item, index}) => {
            return (
              <MessageDetailItem
                key={index}
                index={index}
                item={item}
                type={index % 2 ? 'current_user' : 'remote_user'}
              />
            )
          }}
        />

        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
          <View
            // onLayout={e => {
            //   console.log(e.nativeEvent.layout.y)
            // }}
            style={[styles.inputC, {bottom: bottom}]}>
            <TextInput
              style={[styles.input]}
              placeholder="Write your message"
              placeholderTextColor={'#9e9a9a'}
              cursorColor={Colors.primary}
              onChangeText={text => {
                setMessageText(text)
              }}
            />
            <TouchableOpacity style={styles.sendButton}>
              <FontAwesome name="send" color={Colors.primary} size={20} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  messageDetails: {
    height: Dim.height,
    width: Dim.width,
    backgroundColor: Colors.homeBg,
    position: 'relative',
  },
  listContainer: {
    position: 'absolute',
    top: Dim.height * 0.15,
    height: Dim.height * 0.85,
    width: Dim.width,
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  inputC: {
    height: Dim.height * 0.07,
    width: Dim.width * 0.85,
    backgroundColor: 'rgba(255,255,255,0.9)',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    justifyContent: 'center',
    // backgroundColor: 'red',
    overflow: 'hidden',
    bottom: Dim.height * 0.11,
    // marginTop: 200,
    paddingLeft: 10,
  },
  input: {
    fontSize: 13,
    color: '#615d5d',
    // backgroundColor: 'gold',
    height: '100%',
    width: '100%',
    fontFamily: 'Roboto-Medium',
  },
  sendButton: {
    height: '100%',
    width: '15%',
    right: 0,
    // backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
