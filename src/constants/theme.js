import {Dimensions} from 'react-native'

export const Dim = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}

export const Colors = {
  homeBg: '#151617',
  lightHomeBg: '#262b31',
  primary: '#774afd',
  cartItemBg: '#f1eef5',
  lightPrimaryOpacity: 'rgba(226, 214, 255, .7)',
  inactiveTintColor: '#4f5761',
  green: '#2ab364',
}

export const ColorsArray = [
  ['#a8f5b6', '#c3fbbd'],
  ['#c690f0', '#d3a3fa'],
  ['#fe8ab5', '#fe9aa4'],
  ['#fec17a', '#ffd285'],
]

export const ColorOpacity = [
  ['rgba(168, 245, 182, 1)', 'rgba(195, 251, 189, 1)'],
  ['rgba(198, 144, 240, 1)', 'rgba(211, 163, 250, 1)'],
  ['rgba(254, 138, 181, 1)', 'rgba(254, 154, 164, 1)'],
  ['rgba(254, 193, 122, 1)', 'rgba(255, 210, 133, 1)'],
]
