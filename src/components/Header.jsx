import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import {Colors, Dim} from '../constants/theme'

export default function Header() {
  return (
    <View style={styles.header}>
      <AntDesign
        name="search1"
        size={17}
        color={'#fff'}
        style={{
          marginRight: 5,
        }}
      />
      <View style={styles.locationContainer}>
        <Entypo
          name="location-pin"
          size={17}
          color={'#fff'}
          style={{
            marginRight: 5,
          }}
        />
        <Text style={styles.locationText}>New Jersey</Text>
      </View>
      <View style={styles.bellIconC}>
        <AntDesign
          name="bells"
          size={17}
          color={'#fff'}
          style={{
            marginRight: 5,
          }}
        />
        {/* Badge */}
        <View style={styles.badge} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: Dim.height * 0.1,
    width: Dim.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  bellIconC: {
    position: 'relative',
  },
  locationContainer: {
    height: Dim.height * 0.06,
    width: Dim.width * 0.4,
    backgroundColor: Colors.lightHomeBg,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },
  badge: {
    height: 8,
    width: 8,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    top: -5,
  },
})
