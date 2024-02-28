import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

import {Dim, ListColorsArray, ListColorsArrayReviews} from '../constants/theme'

import LinearGradient from 'react-native-linear-gradient'

export default function MessagesItem({index}) {
  return (
    <LinearGradient
      colors={[ListColorsArray[index % 4], ListColorsArray[index % 4]]}
      style={styles.messagesItem}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/jason.jpg')}
          style={{
            height: 30,
            width: 30,
            borderRadius: 30,
          }}
          resizeMode="cover"
        />
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.nameHeader}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Roboto-Bold',
              color: '#000',
            }}>
            John Smith
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Poppins-SemiBold',
              color: ListColorsArrayReviews[index % 4][1],
              marginTop: 4,
              marginLeft: 'auto',
            }}>
            4m
          </Text>
        </View>

        <View
          style={{
            height: '40%',
            // backgroundColor: 'red',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={styles.messageTextContainer}>
            <Text
              style={{
                fontSize: 11,
                fontFamily: 'Poppins-Light',
                color: '#000',
                textAlign: 'left',
              }}>
              Hurrison was a very nice person ...
            </Text>
          </View>

          {/* Badge */}
          <View
            style={[
              styles.badge,
              {backgroundColor: ListColorsArrayReviews[index % 4][1]},
            ]}>
            <Text style={styles.badgeText}>{1}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  messagesItem: {
    height: Dim.height * 0.1,
    width: Dim.width * 0.84,
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    overflow: 'hidden',
    marginBottom: 10,
  },
  badge: {
    height: 15,
    width: 15,
    borderRadius: 10,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
    marginBottom: 10,
  },
  badgeText: {
    fontSize: 11,
    fontFamily: 'Roboto-Bold',
    color: '#fff',
  },
  imageContainer: {
    height: '100%',
    width: '20%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    width: '80%',
    height: '100%',
    // backgroundColor: 'green',
  },
  messageTextContainer: {
    width: '80%',
    height: '100%',
    // backgroundColor: 'green',
  },
  nameHeader: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    height: '60%',
    alignItems: 'center',
    paddingRight: 20,
  },
  userReviewItem: {
    height: Dim.height * 0.1,
    width: Dim.width * 0.84,
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    overflow: 'hidden',
  },
})
