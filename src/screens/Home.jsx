import React from 'react'
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import {Colors, Dim} from '../constants/theme'

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {CartItem, ListItem} from '../components'

export default function Home() {
  return (
    <View style={styles.home}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      {/* Header */}
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

      <View style={styles.bestToRent}>
        <Text style={styles.rentText}>Find the best to rent!</Text>
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <ListItem index={index} />
        }}
        contentContainerStyle={styles.listItemStyle}
      />

      {/* The bottom container for the app */}
      <View style={styles.bottomC}>
        <View style={styles.bottomHeader}>
          <Text
            style={[
              styles.viewAllText,
              {
                color: '#000',
                fontSize: 15,
                fontFamily: 'Poppins-SemiBold',
              },
            ]}>
            Lease Again
          </Text>
          <TouchableOpacity style={styles.viewAllTextC}>
            <Text style={styles.viewAllText}>View all</Text>
            <Ionicons name="chevron-forward" size={15} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: Dim.height * 0.2,
          }}>
          <View styles={styles.leaseAgainSliderContainer}>
            <FlatList
              data={[1, 2, 3, 4, 5, 6]}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => {
                return <CartItem index={index} />
              }}
              contentContainerStyle={styles.leaseAgainSliderStyle}
            />
          </View>

          <View style={{paddingTop: 10, paddingLeft: 30}}>
            <Text
              style={{
                color: '#000',
                fontSize: 15,
                fontFamily: 'Poppins-SemiBold',
                marginBottom: 5,
              }}>
              Available Now
            </Text>
          </View>

          <View style={styles.availableItemsContainer}>
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
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    //   backgroundColor: 'red',
                    marginBottom: 2,
                    marginLeft: 7,
                  }}>
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
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rateText: {
    fontSize: 10,
    fontFamily: 'Roboto-Bold',
    marginLeft: 10,
    marginBottom: 2,
  },
  ratingText: {
    fontSize: 11,
    fontFamily: 'Roboto-Bold',
    color: Colors.primary,
  },
  availableItemTitleC: {
    width: '83%',
    height: '100%',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    paddingLeft: 15,
    position: 'relative',
  },

  distanceText: {
    fontSize: 10,
    fontFamily: 'Poppins-Light',
    color: '#000',
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
  badge: {
    height: 8,
    width: 8,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    position: 'absolute',
    right: 0,
    top: -5,
  },
  leaseAgainSliderStyle: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingTop: 15,
    height: Dim.height * 0.33,
    //   backgroundColor: 'red',
  },
  viewAllTextC: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 13,
    color: Colors.primary,
    fontFamily: 'Poppins-Regular',
    marginRight: 2,
    marginTop: 2,
  },
  bottomC: {
    position: 'absolute',
    width: Dim.width,
    height: Dim.height * 0.6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: Dim.height * 0.4,
  },
  bottomHeader: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
  },
  bestToRent: {
    paddingTop: 10,
    paddingLeft: 30,
    // backgroundColor: 'red',
  },
  listItemStyle: {
    paddingTop: 10,
    paddingLeft: 30,
  },
  rentText: {
    fontSize: 20,
    fontFamily: 'Poppins-Light',
    color: '#fff',
  },
  bellIconC: {
    position: 'relative',
  },
  home: {
    flex: 1,
    backgroundColor: Colors.homeBg,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 45,
  },
  header: {
    height: Dim.height * 0.09,
    width: Dim.width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
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
})
