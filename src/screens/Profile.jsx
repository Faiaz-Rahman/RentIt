import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Colors, Dim} from '../constants/theme'
import {Header} from '../components'

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Profile() {
  const profileImage = require('../../assets/images/jason.jpg')
  return (
    <SafeAreaView
      style={styles.profile}
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

      <Header locationShown={false} />

      <View
        style={{
          // backgroundColor: 'red',
          height: Dim.height * 0.42,
        }}>
        <View style={styles.imageContainer}>
          <Image
            source={profileImage}
            style={{
              height: 70,
              width: 70,
              borderRadius: 70,
            }}
            resizeMode="cover"
          />
        </View>

        {/* Username header */}
        <View style={styles.userNameHeaderContainer}>
          <Text style={styles.userNameStyle}>Hurrison's Shop</Text>
        </View>

        {/* User Location container */}
        <View style={styles.userLocationContainer}>
          <Entypo
            name="location-pin"
            size={16}
            color={'#fff'}
            style={{
              marginRight: 5,
            }}
          />
          <Text style={styles.addressText}>Royal Ln, Mesa, New Jersey</Text>
        </View>

        {/* Header Icon Container */}
        <View style={styles.headerIconContainer}>
          <TouchableOpacity
            style={[
              styles.messageButton,
              {
                backgroundColor: Colors.violet,
              },
            ]}>
            <AntDesign name="message1" size={20} color={'#fff'} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.messageButton,
              {
                backgroundColor: Colors.green,
              },
            ]}>
            <MaterialCommunityIcons name="bookshelf" size={20} color={'#fff'} />
          </TouchableOpacity>
        </View>

        {/* Review Section */}
        <View style={styles.ratingSectionContainer}>
          <View style={styles.customerContainer}>
            <Image
              source={require('../../assets/images/jason.jpg')}
              height={10}
              width={10}
              style={{
                height: 25,
                width: 25,
                borderRadius: 15,
                position: 'absolute',
                left: '25%',
                top: '20%',
                zIndex: -1,
              }}
              resizeMode="cover"
            />

            <Image
              source={require('../../assets/images/jason.jpg')}
              height={10}
              width={10}
              style={{
                height: 25,
                width: 25,
                borderRadius: 15,
                position: 'absolute',
                top: '20%',
                zIndex: 5,
              }}
              resizeMode="cover"
            />

            <Image
              source={require('../../assets/images/jason.jpg')}
              height={10}
              width={10}
              style={{
                height: 25,
                width: 25,
                borderRadius: 15,
                position: 'absolute',
                zIndex: 15,
                left: '50%',
                top: '20%',
              }}
              resizeMode="cover"
            />
            <Text style={styles.customNumText}>20 customers</Text>
          </View>

          <View
            style={[
              styles.customerContainer,
              {
                width: '20%',
              },
            ]}>
            <View style={styles.ratingsC}>
              <Image
                source={require('../../assets/images/star.png')}
                style={{
                  height: 20,
                  tintColor: Colors.primary,
                  width: 20,
                }}
              />
              <Text style={styles.ratingText}>4.8</Text>
            </View>
            <Text style={styles.customNumText}>17 Reviews</Text>
          </View>

          <View
            style={[
              styles.customerContainer,
              {
                width: '20%',
              },
            ]}>
            <Text style={styles.titleReviewSectionComponent}>7 items</Text>
            <Text style={styles.customNumText}>Total</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: Colors.homeBg,
  },
  imageContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  userNameHeaderContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
    marginTop: Dim.height * 0.01,
  },
  userNameStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#fff',
  },
  addressText: {
    fontSize: 11,
    fontFamily: 'Poppins-Light',
    color: '#fff',
  },
  userLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconContainer: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'center',
    marginTop: Dim.height * 0.01,
    gap: 15,
    marginBottom: 20,
  },
  messageButton: {
    height: Dim.height * 0.07,
    width: Dim.height * 0.07,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Dim.height * 0.04,
  },
  ratingSectionContainer: {
    // backgroundColor: 'violet',
    width: Dim.width,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  customerContainer: {
    position: 'relative',
    height: Dim.height * 0.1,
    width: '27%',
    borderRadius: 10,
    backgroundColor: Colors.lightHomeBg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customNumText: {
    position: 'absolute',
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    fontSize: 10,
    bottom: 5,
  },
  ratingsC: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '23%',
  },
  ratingText: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    marginLeft: 3,
    marginTop: 2,
  },
  titleReviewSectionComponent: {
    position: 'absolute',
    top: '22%',
    fontSize: 13,
    fontFamily: 'Roboto-Bold',
    color: '#fff',
  },
})
