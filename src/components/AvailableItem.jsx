import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {ColorOpacity, Colors, ColorsArray, Dim} from '../constants/theme'

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'

export default function AvailableItem({
  extraStyle,
  index,
  differentColors = false,
}) {
  if (differentColors) {
    return (
      <LinearGradient
        style={[styles.gradient, extraStyle]}
        colors={[...ColorsArray[index % 4]]}>
        <View style={styles.availableItemImage}>
          <Image
            source={require('../../assets/images/tv.png')}
            style={styles.availableItemImageStyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.availableItemTitleC}>
          <Text style={styles.titleStyle}>Craftsman Cordless Drill</Text>
          <View style={styles.availableItemInfoC}>
            <Entypo name="location-pin" size={16} color={Colors.homeBg} />
            <Text style={styles.distanceText}>4.0km</Text>
            <Text style={styles.rateText}>15$ /hr</Text>
            <View style={styles.ratingC}>
              <Image
                source={require('../../assets/images/star.png')}
                style={{
                  height: 13,
                  width: 13,
                  tintColor: Colors.primary,
                }}
              />
              <Text style={styles.ratingText}>4.9</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 15,
            right: 15,
          }}>
          <AntDesign name="heart" color={Colors.primary} size={15} />
        </TouchableOpacity>
      </LinearGradient>
    )
  }

  return (
    <View style={[styles.availableItemsContainer, extraStyle]}>
      <View style={styles.availableItemImage}>
        <Image
          source={require('../../assets/images/tv.png')}
          style={styles.availableItemImageStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.availableItemTitleC}>
        <Text style={styles.titleStyle}>Craftsman Cordless Drill</Text>
        <View style={styles.availableItemInfoC}>
          <Entypo name="location-pin" size={16} color={Colors.homeBg} />
          <Text style={styles.distanceText}>4.0km</Text>
          <Text style={styles.rateText}>15$ /hr</Text>
          <View style={styles.ratingC}>
            <Image
              source={require('../../assets/images/star.png')}
              style={{
                height: 13,
                width: 13,
                tintColor: Colors.primary,
              }}
            />
            <Text style={styles.ratingText}>4.9</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 15,
          right: 15,
        }}>
        <AntDesign name="heart" color={Colors.primary} size={15} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  ratingC: {
    flexDirection: 'row',
    alignItems: 'center',
    //   backgroundColor: 'red',
    marginBottom: 2,
    marginLeft: 7,
  },
  availableItemsContainer: {
    height: Dim.height * 0.1,
    width: Dim.width * 0.84,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: Colors.cartItemBg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  gradient: {
    height: Dim.height * 0.1,
    width: Dim.width * 0.84,
    borderRadius: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    overflow: 'hidden',
  },
  availableItemInfoC: {
    marginTop: 3,
    flexDirection: 'row',
    // backgroundColor: 'green',
    alignItems: 'center',
  },
  titleStyle: {
    fontFamily: 'Roboto-Bold',
    color: '#000',
    fontSize: 12,
  },
  availableItemImage: {
    width: '17%',
    height: '80%',
  },
  availableItemImageStyle: {
    height: '100%',
    width: '100%',
  },
  ratingText: {
    fontSize: 11,
    fontFamily: 'Roboto-Bold',
    color: Colors.primary,
  },
  rateText: {
    fontSize: 10,
    fontFamily: 'Roboto-Bold',
    marginLeft: 10,
    marginBottom: 2,
  },
  distanceText: {
    fontSize: 10,
    fontFamily: 'Poppins-Light',
    color: '#000',
  },
  availableItemTitleC: {
    width: '83%',
    height: '100%',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    paddingLeft: 15,
    position: 'relative',
  },
})
