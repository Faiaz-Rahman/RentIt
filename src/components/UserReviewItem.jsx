import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import {Dim, Colors, ListColorsArrayReviews} from '../constants/theme'
import LinearGradient from 'react-native-linear-gradient'

export default function UserReviewItem({index}) {
  return (
    <LinearGradient
      colors={[
        ListColorsArrayReviews[index % 4][0],
        ListColorsArrayReviews[index % 4][0],
      ]}
      style={styles.userReviewItem}>
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
            John Smith -{' '}
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Roboto-Bold',
              color: ListColorsArrayReviews[index % 4][1],
            }}>
            Excellent
          </Text>

          <Image
            source={require('../../assets/images/star.png')}
            style={{
              height: 15,
              width: 15,
              tintColor: ListColorsArrayReviews[index % 4][1],
              marginLeft: 'auto',
            }}
          />
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'Poppins-SemiBold',
              color: ListColorsArrayReviews[index % 4][1],
              marginTop: 2,
            }}>
            4.8
          </Text>
        </View>

        <View
          style={{
            height: '40%',
            // backgroundColor: 'red',
          }}>
          <Text
            style={{
              fontSize: 11,
              fontFamily: 'Poppins-Light',
              color: '#000',
            }}>
            Hurrison was a nice person. Very ...
          </Text>
        </View>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
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
  imageContainer: {
    height: '100%',
    width: '20%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
