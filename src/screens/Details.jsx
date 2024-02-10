import {View, Text, StyleSheet, StatusBar, Image} from 'react-native'
import React from 'react'
import {Colors, Dim} from '../constants/theme'

import {SafeAreaView} from 'react-native-safe-area-context'
import {CustomHeader} from '../components'

import Entypo from 'react-native-vector-icons/Entypo'

export default function Details() {
  return (
    <SafeAreaView style={styles.details}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'#fff'}
        translucent
      />
      <CustomHeader title={'Base Camp Tent'} />

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/tv.jpg')}
          style={{
            height: '90%',
            width: '90%',
            borderRadius: 10,
          }}
          resizeMode="contain"
        />

        <View style={styles.distanceC}>
          <Entypo
            name="location-pin"
            size={17}
            color={'#fff'}
            style={{
              marginRight: 5,
            }}
          />
          <Text style={styles.distanceText}>3.2 km</Text>
        </View>

        <View
          style={[
            styles.distanceC,
            {
              left: 100,
              backgroundColor: Colors.green,
            },
          ]}>
          <Text style={styles.distanceText}>Available</Text>
        </View>

        <View style={styles.starC}>
          <Image
            source={require('../../assets/images/star.png')}
            style={{
              height: 17,
              width: 17,
              tintColor: Colors.primary,
            }}
          />
          <Text style={styles.starText}>4.9</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  starC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 12.5,
    left: 165,
  },
  starText: {
    fontSize: 11,
    fontFamily: 'Roboto-Bold',
    color: Colors.primary,
    marginBottom: 2,
    marginLeft: 2,
  },
  details: {
    flex: 1,
    // height: Dim.height,
    width: Dim.width,
    backgroundColor: '#fff',
  },
  distanceC: {
    height: 23,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 10,
    left: 25,
    flexDirection: 'row',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  distanceText: {
    fontSize: 11,
    fontFamily: 'Roboto-Medium',
    color: '#fff',
  },
  imageContainer: {
    height: Dim.height * 0.3,
    width: Dim.width * 0.8,
    alignSelf: 'center',
    backgroundColor: Colors.cartItemBg,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
})
