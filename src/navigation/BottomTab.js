import {View, StyleSheet} from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs/'
import {AddNew, Favorites, Home, Messages, Profile} from '../screens'

import Octicons from 'react-native-vector-icons/Octicons'
import {Colors, Dim} from '../constants/theme'

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'

const BottomTabNav = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <BottomTabNav.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.inactiveTintColor,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <BottomTabNav.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Octicons name="apps" size={size} color={color} />
          },
        }}
      />
      <BottomTabNav.Screen
        name="fav"
        component={Favorites}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <AntDesign name="hearto" color={color} size={size} />
          },
        }}
      />
      <BottomTabNav.Screen
        name="add"
        component={AddNew}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View style={styles.plusIconContainer}>
                <View style={styles.plusIconInnerContainer}>
                  <AntDesign name="plus" color={'#fff'} size={size} />
                </View>
              </View>
            )
          },
        }}
      />
      <BottomTabNav.Screen
        name="messages"
        component={Messages}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <MaterialCommunityIcons
                name="message-processing-outline"
                size={size}
                color={color}
              />
            )
          },
        }}
      />
      <BottomTabNav.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Feather name="user" color={color} size={size} />
          },
        }}
      />
    </BottomTabNav.Navigator>
  )
}

const styles = StyleSheet.create({
  plusIconContainer: {
    height: Dim.height * 0.1,
    width: Dim.height * 0.1,
    backgroundColor: Colors.lightPrimaryOpacity,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  plusIconInnerContainer: {
    height: Dim.height * 0.08,
    width: Dim.height * 0.08,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    elevation: 0,
  },
})

export {BottomTab}
