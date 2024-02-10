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

import Ionicons from 'react-native-vector-icons/Ionicons'
import {AvailableItem, CartItem, Header, ListItem} from '../components'
import {SafeAreaView} from 'react-native-safe-area-context'

import {useNavigation} from '@react-navigation/native'

export default function Home() {
  const nav = useNavigation()

  return (
    <SafeAreaView
      initialMetrics={{
        insets: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      }}
      style={styles.home}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'light-content'}
      />

      {/* Header */}
      <Header />

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
                return (
                  <CartItem
                    index={index}
                    onPress={() => {
                      nav.navigate('details')
                    }}
                  />
                )
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

          <AvailableItem />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
    top: Dim.height * 0.41,
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
    height: Dim.height * 0.3,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 45,
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
