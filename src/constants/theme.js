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
  lightPrimaryOpacity: 'rgba(226, 214, 255, .9)',
  inactiveTintColor: '#4f5761',
}

export const ColorsArray = [
  ['#a8f5b6', '#c3fbbd'],
  ['#c690f0', '#d3a3fa'],
  ['#fe8ab5', '#fe9aa4'],
  ['#fec17a', '#ffd285'],
]
