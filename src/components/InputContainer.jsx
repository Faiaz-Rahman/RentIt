import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Dim, ListColorsArrayReviews} from '../constants/theme'

export default function InputContainer({bgColor, children, index, title}) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <View
      style={[
        styles.inputContainer,
        {
          backgroundColor: bgColor,
          marginTop: index === 0 ? 50 : 10,
          borderWidth: 2,
          borderColor: isFocused ? ListColorsArrayReviews[index][1] : '#fff',
        },
      ]}>
      <View style={styles.iconContainer}>{children}</View>
      <TextInput
        style={styles.input}
        cursorColor={ListColorsArrayReviews[index][1]}
        placeholder={title}
        placeholderTextColor={ListColorsArrayReviews[index][1]}
        onFocus={() => {
          setIsFocused(true)
        }}
        onBlur={() => {
          setIsFocused(false)
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  iconContainer: {
    height: '100%',
    width: '10%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: '100%',
    width: '80%',
    fontSize: 12,
    // backgroundColor: 'red',
    fontFamily: 'Roboto-Regular',
    paddingLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    height: Dim.height * 0.08,
    width: Dim.width * 0.77,
    overflow: 'hidden',
    alignSelf: 'center',
    borderRadius: 10,
    paddingLeft: 10,
  },
})
