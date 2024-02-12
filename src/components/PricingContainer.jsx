import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {Dim, Colors} from '../constants/theme'

export default function PricingContainer({
  selected,
  onPress,
  type,
  rate,
  rateType,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.pricingItem,
        {
          backgroundColor: selected ? '#000' : Colors.lightPrimaryOpacity,
        },
      ]}
      onPress={onPress}>
      <Text style={selected ? styles.selectedTextHeading : styles.textHeading}>
        {type}
      </Text>
      <Text style={selected ? styles.selectedTextRate : styles.textRate}>
        {rate}$
      </Text>
      <Text style={selected ? styles.selectedTextType : styles.textType}>
        / {rateType}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  selectedTextHeading: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    color: '#fff',
  },
  selectedTextRate: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  selectedTextType: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  textHeading: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    color: '#000',
  },
  textRate: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  textType: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  pricingItem: {
    width: '24%',
    height: '80%',
    backgroundColor: Colors.lightPrimaryOpacity,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderRadius: 30,
  },
})
