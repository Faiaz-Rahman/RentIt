import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Dim, ListColorsArray} from '../constants/theme'

export default function MessageDetailItem({type, index, item}) {
  if (type === 'remote_user') {
    return (
      <View
        style={[
          styles.messageDetailsWrapper,
          {
            alignItems: index % 2 ? 'flex-end' : 'flex-start',
          },
        ]}>
        <View style={styles.messageDetailsItem}>
          <Text style={styles.messageDetailsText}>
            Lorem ipsum dolor sit amet consectetur.
          </Text>
        </View>
      </View>
    )
  } else {
    return (
      <View
        style={[
          styles.messageDetailsWrapper,
          {
            alignItems: index % 2 ? 'flex-end' : 'flex-start',
          },
        ]}>
        <View
          style={[
            styles.messageDetailsItemUser,
            {
              backgroundColor: ListColorsArray[Math.floor(index / 2) % 4],
            },
          ]}>
          <Text style={styles.messageDetailsText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  messageDetailsItem: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    width: Dim.width * 0.45,
    elevation: 3,
  },
  messageDetailsItemUser: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    borderRadius: 10,
    width: Dim.width * 0.45,
    elevation: 3,
  },
  messageDetailsText: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: '#615d5d',
    textAlign: 'left',
  },
  messageDetailsWrapper: {
    paddingLeft: Dim.width * 0.08,
    paddingRight: Dim.width * 0.08,
    // backgroundColor: 'tomato',
    width: Dim.width,
  },
})
