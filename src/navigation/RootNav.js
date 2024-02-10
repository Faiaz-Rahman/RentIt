import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {BottomTab} from './BottomTab'
import Details from '../screens/Details'

const Stack = createNativeStackNavigator()

const RootNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="bottom_tab"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="bottom_tab" component={BottomTab} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  )
}

export {RootNav}
