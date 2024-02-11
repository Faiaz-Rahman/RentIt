import React, {useState, useRef} from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native'
import {Colors, Dim} from '../constants/theme'

import {SafeAreaView} from 'react-native-safe-area-context'
import {CustomHeader, ImageSliderItem} from '../components'

export default function Details() {
  const [fav, setFav] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

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
            return <ImageSliderItem />
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
})
