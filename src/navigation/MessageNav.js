import {createNativeStackNavigator} from '@react-navigation/native-stack'
import React from 'react'
import {Messages, MessageDetails} from '../screens'

const MessageStack = createNativeStackNavigator()

const MessageNav = () => {
  return (
    <MessageStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MessageStack.Screen
        name="all_messages"
        component={Messages}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <MessageStack.Screen
        name="message_details"
        component={MessageDetails}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </MessageStack.Navigator>
  )
}

export {MessageNav}
