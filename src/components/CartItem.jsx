import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {Colors, Dim} from '../constants/theme'

import AntDesign from 'react-native-vector-icons/AntDesign'

export default function CartItem() {
  const itemImage = require('../../assets/images/tv.png')
  return (
    <View style={styles.cartItemC}>
      <View style={styles.cartItem}>
        <View style={styles.imageContainer}>
          <Image
            source={itemImage}
            style={styles.cartImageStyle}
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="heart" color={Colors.primary} size={18} />
        </TouchableOpacity>

        <View style={styles.ratingStyle}>
          <Image
            source={require('../../assets/images/star.png')}
            style={{
              height: 13,
              width: 13,
              tintColor: Colors.primary,
            }}
          />
          <Text style={styles.rating}>4.1</Text>
        </View>
      </View>
      <View style={styles.footerTextC}>
        <Text style={styles.footerText}>Base Camp 4 - Person Tent</Text>
        <Text
          style={[
            styles.footerText,
            {
              fontFamily: 'Poppins-Bold',
              fontSize: 10,
              marginTop: 5,
            },
          ]}>
          15$ <Text style={{fontFamily: 'Roboto-Light'}}> /hr</Text>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footerTextC: {
    width: '80%',
    paddingTop: 5,
    paddingLeft: 10,
  },
  cartImageStyle: {
    height: '100%',
    width: '100%',
    transform: [{rotate: '-10deg'}],
  },
  imageContainer: {
    height: Dim.height * 0.13,
    width: Dim.height * 0.13,
    backgroundColor: 'transparent',
  },
  rating: {
    fontSize: 10,
    fontFamily: 'Roboto-Bold',
    marginBottom: 1,
    marginLeft: 2,
  },
  ratingStyle: {
    position: 'absolute',
    top: '83%',
    right: '10%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    color: '#000',
  },
  cartItemC: {
    // backgroundColor: 'red',
    height: Dim.height * 0.3,
    width: Dim.height * 0.22,
    marginRight: 5,
  },
  cartItem: {
    height: Dim.height * 0.2,
    width: Dim.height * 0.2,
    backgroundColor: Colors.cartItemBg,
    marginRight: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
})
