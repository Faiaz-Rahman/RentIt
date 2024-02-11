import React, {useState, useRef} from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {Colors, Dim} from '../constants/theme'

import {SafeAreaView} from 'react-native-safe-area-context'
import {
  Button,
  CustomHeader,
  ImageSliderItem,
  PricingContainer,
} from '../components'

import Entypo from 'react-native-vector-icons/Entypo'

export default function Details() {
  const [fav, setFav] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const starImage = require('../../assets/images/star.png')
  const [seletedSubscription, setSelectedSubscription] = useState({
    type: 'hourly',
    rate: 5,
  })

  const handleIndex = ({nativeEvent}) => {
    const offset = nativeEvent.contentOffset
    // console.log(Math.floor(offset.x / Dim.width))

    const index = Math.floor(offset.x / Dim.width)
    setActiveIndex(index)
  }

  const badgeArr = [1, 2, 3]

  return (
    <SafeAreaView style={styles.details}>
      <StatusBar
        barStyle={'dark-content'}
        // backgroundColor={'#fff'}
        translucent
      />
      <CustomHeader
        title={'Base Camp Tent'}
        onPress={() => {
          setFav(prev => !prev)
        }}
        fav={fav}
      />

      {/* Image Container */}
      <View>
        <ScrollView
          horizontal
          contentContainerStyle={{
            // backgroundColor: 'red',
            height: Dim.height * 0.31,
          }}
          snapToAlignment="center"
          decelerationRate={0}
          disableIntervalMomentum={true}
          snapToInterval={Dim.width}
          showsHorizontalScrollIndicator={false}
          onScroll={handleIndex}>
          {badgeArr.map((item, ind) => {
            return <ImageSliderItem key={`slider${ind}`} />
          })}
        </ScrollView>
      </View>

      {/* slider thumb */}
      {/* {backgroundColor: Colors.lightPrimaryOpacity} */}
      <View style={styles.thumbContainer}>
        {badgeArr.map((item, ind) => {
          return (
            <View
              key={ind}
              style={[
                styles.thumb,
                {
                  backgroundColor:
                    ind === activeIndex
                      ? Colors.primary
                      : Colors.lightPrimaryOpacity,
                },
              ]}
            />
          )
        })}
      </View>

      {/* User profile  */}
      <View style={styles.userProfile}>
        <View style={styles.userProfileImageC}>
          <Image
            source={require('../../assets/images/jason.jpg')}
            style={{
              height: Dim.height * 0.07,
              width: Dim.height * 0.07,
              borderRadius: 35,
            }}
          />

          <View style={{paddingLeft: 10, justifyContent: 'center'}}>
            <Text style={styles.userProfileName}>Hurrison's Shop</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {[1, 2, 3, 4, 5].map((item, ind) => {
                return (
                  <Image
                    source={starImage}
                    style={{
                      height: 17,
                      width: 17,
                      tintColor: Colors.primary,
                    }}
                  />
                )
              })}
              <Text
                style={[
                  styles.userProfileName,
                  {fontSize: 10, marginTop: 3, marginLeft: 3},
                ]}>
                4.8
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.arrowRight}>
          <Entypo name="chevron-thin-right" size={17} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Pricing Container */}
      <View style={styles.pricingContainer}>
        <PricingContainer
          rate={5}
          type="Hourly"
          rateType={'hr'}
          selected={seletedSubscription.type === 'hourly' ? true : false}
          onPress={() =>
            setSelectedSubscription({
              type: 'hourly',
              rate: 5,
            })
          }
        />

        <PricingContainer
          rate={15}
          type="Daily"
          rateType={'day'}
          selected={seletedSubscription.type === 'daily' ? true : false}
          onPress={() =>
            setSelectedSubscription({
              type: 'daily',
              rate: 15,
            })
          }
        />

        <PricingContainer
          rate={40}
          type="Monthly"
          rateType={'mth'}
          selected={seletedSubscription.type === 'monthly' ? true : false}
          onPress={() =>
            setSelectedSubscription({
              type: 'monthly',
              rate: 40,
            })
          }
        />
      </View>

      <Button
        title={`Lease for ${60}$`}
        extraStyles={{
          marginTop: 10,
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pricingContainer: {
    height: Dim.height * 0.2,
    width: Dim.width,
    // backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTextHeading: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    color: '#fff',
  },
  selectedTextRate: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: '#fff',
  },
  selectedTextType: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
  },
  textHeading: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    color: '#000',
  },
  textRate: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
  },
  textType: {
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  pricingItem: {
    width: '24%',
    height: '80%',
    backgroundColor: Colors.lightPrimaryOpacity,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderRadius: 30,
  },
  arrowRight: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: Colors.lightPrimaryOpacity,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumb: {
    height: 8,
    width: 8,
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  thumbContainer: {
    height: Dim.height * 0.05,
    width: Dim.width * 0.15,
    // backgroundColor: 'red',
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 7,
    paddingRight: 7,
  },
  details: {
    flex: 1,
    // height: Dim.height,
    width: Dim.width,
    backgroundColor: '#fff',
  },
  userProfile: {
    height: Dim.height * 0.09,
    // backgroundColor: 'orange',
    width: Dim.width,
    paddingLeft: Dim.width * 0.1,
    paddingRight: Dim.width * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImageC: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: Dim.width * 0.73,
  },
  userProfileName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: '#000',
  },
})
