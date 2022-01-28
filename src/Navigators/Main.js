import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer } from '@/Containers'
import HomeScreen from '@/Screens/HomeScreen'

import {
  Image
} from 'react-native'
import Cart from '@/Screens/Cart'
import Product from '@/Screens/Product'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabelPosition: 'beside-icon',
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Image style={{height:30,width:30}} source={require('../Images/homeO.png')}  />
          )
        }}
      />
      {/* DUMMY */}
      <Tab.Screen
        name="Category"
        component={Product}
        options={{
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Image style={{height:30,width:30}} source={require('../Images/catG.png')}  />
          )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: { display: 'none' },
          tabBarStyle: { display: 'none' },
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Image style={{height:30,width:30}} source={require('../Images/basketG.png')}  />
          )
        }}
      />
      <Tab.Screen
        name="User"
        component={HomeScreen}
        options={{
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: { display: 'none' },
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Image style={{height:30,width:30}} source={require('../Images/userG.png')}  />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
