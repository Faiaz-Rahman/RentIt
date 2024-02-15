import React, {useState, useRef, useEffect} from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {Calendar} from 'react-native-calendars'

export default function Details() {
  const [fav, setFav] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const starImage = require('../../assets/images/star.png')
  const [seletedSubscription, setSelectedSubscription] = useState({
    type: 'Hourly',
    rate: 5,
  })
  const [calendarModalVisible, setCalendarModalVisible] = useState(false)
  const [selected, setSelected] = useState(null)
  const [selectedSecond, setSelectedSecond] = useState(null)
  const [objOfDates, setObjOfDates] = useState(null)

  const pricingInfo = [
    {
      rate: 5,
      type: 'Hourly',
      rateType: 'hr',
    },
    {
      rate: 15,
      type: 'Daily',
      rateType: 'day',
    },
    {
      rate: 40,
      type: 'Monthly',
      rateType: 'mth',
    },
  ]

  const handleIndex = ({nativeEvent}) => {
    const offset = nativeEvent.contentOffset
    // console.log(Math.floor(offset.x / Dim.width))

    const index = Math.floor(offset.x / Dim.width)
    setActiveIndex(index)
  }

  const badgeArr = [1, 2, 3]
  const ratingsArr = [1, 2, 3, 4, 5]

  const handleDayPress = day => {
    console.log(day)
    if (!selected) {
      setSelected(day)
    } else {
      setSelectedSecond(day)
    }
  }

  useEffect(() => {
    console.log(selected, selectedSecond)
    if (selected && selectedSecond) {
      console.log('Inside the useEffect()')
      let obj = {}

      for (
        let i = 0;
        i <= selectedSecond.dateString - selected.dateString;
        ++i
      ) {
        console.log(`${selected.year}-${selected.month}-${selected.day + i}`)
        if (!obj[`${selected.year}-${selected.month}-${selected.day + i}`]) {
          if (i === 0) {
            obj[`${selected.year}-${selected.month}-${selected.day + i}`] = {
              color: '#fff',
              startingDay: true,
              textColor: Colors.primary,
            }
          } else if (i === selectedSecond.dateString - selected.dateString) {
            obj[`${selected.year}-${selected.month}-${selected.day + i}`] = {
              color: '#fff',
              endingDay: true,
              textColor: Colors.primary,
            }
          } else {
            obj[`${selected.year}-${selected.month}-${selected.day + i}`] = {
              color: '#fff',
              marked: true,
              textColor: Colors.primary,
            }
          }
        }
      }
      console.log('the object is', obj)

      setObjOfDates(obj)
    }
  }, [selected, selectedSecond])

  useEffect(() => {
    console.log(objOfDates)
  }, [objOfDates])

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
              {ratingsArr.map((item, ind) => {
                return (
                  <Image
                    key={ind}
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
        {pricingInfo.map((item, ind) => {
          return (
            <PricingContainer
              key={ind}
              rate={item.rate}
              type={item.type}
              rateType={item.rateType}
              selected={seletedSubscription.type === item.type ? true : false}
              onPress={() =>
                setSelectedSubscription({
                  type: item.type,
                  rate: item.rate,
                })
              }
            />
          )
        })}
      </View>
      {/* Further Customizing the button */}
      <Button
        onPress={() => {
          setCalendarModalVisible(true)
        }}
        extraStyles={{
          backgroundColor: Colors.lightPrimaryOpacity,
          flexDirection: 'row',
        }}>
        {/* passing as a children prop */}
        <View style={styles.leftPortion}>
          <MaterialCommunityIcons
            name="calendar-clock"
            size={20}
            color={Colors.primary}
          />
        </View>
        <View style={styles.rightPortion}>
          <Text style={styles.dateButton}>Set dates</Text>
        </View>
      </Button>
      <Button
        title={`Lease for ${60}$`}
        extraStyles={{
          marginTop: 10,
        }}
      />

      <Modal
        animationType="slide"
        visible={calendarModalVisible}
        onRequestClose={() => {
          setCalendarModalVisible(false)
        }}
        transparent>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <StatusBar backgroundColor={'rgba(0,0,0,0.3)'} />
          <Calendar
            style={styles.calendar}
            onDayPress={handleDayPress}
            theme={{
              calendarBackground: Colors.primary,
              selectedDayTextColor: '#fff',
              monthTextColor: '#fff',
              todayTextColor: '#000000',
              dayTextColor: '#fff',
              arrowColor: '#fff',
              selectedDayBackgroundColor: '#000',
              textDayFontFamily: 'Roboto-Bold',
            }}
            hideExtraDays
            disableArrowLeft={false}
            markedDates={
              objOfDates === null
                ? {
                    [selected]: {
                      color: '#fff',
                      startingDay: true,
                      textColor: Colors.primary,
                    },
                  }
                : objOfDates
            }
            markingType="period"
          />
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  calendar: {
    height: Dim.height * 0.63,
    width: Dim.width * 0.9,
    elevation: 10,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: Colors.primary,
  },
  leftPortion: {
    width: '60%',
    height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  dateButton: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: Colors.primary,
  },
  rightPortion: {
    width: '30%',
    height: '100%',
    // backgroundColor: 'violet',
    justifyContent: 'center',
    alignItems: 'center',
  },
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
