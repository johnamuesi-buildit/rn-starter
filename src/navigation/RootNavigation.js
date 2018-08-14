import React, {Component} from 'react';
// https://oblador.github.io/react-native-vector-icons/
import Ionicons from 'react-native-vector-icons/Ionicons';



import {HomeScreen} from '../screens/HomeScreen/HomeScreen'
import {BalanceScreen} from '../screens/BalanceScreen/BalanceScreen'
import {ContactScreen} from '../screens/ContactScreen/ContactScreen'
import {ListDataScreen} from '../screens/ListDataScreen/ListDataScreen'

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';


export const Tabs = createBottomTabNavigator({
    HomeScreen:{
        screen: HomeScreen,
        navigationOptions:{
            title: 'Home',
            tabBarLabel:'Home',
            tabBarIcon:({tintColor})=> (
                <Ionicons name="ios-home" size={24}/>
            )
        }
    },

    BalanceScreen:{
        screen: BalanceScreen,
        navigationOptions:{
            tabBarLabel:'Balance',
            tabBarIcon:({tintColor})=> (
                <Ionicons name="ios-cash" size={24}/>
            )
        }
    },

    ContactScreen:{
        screen: ContactScreen,
        navigationOptions:{
            tabBarLabel:'Contact',
            tabBarIcon:({tintColor})=> (
                <Ionicons name="ios-contact" size={24}/>
            )
        }
    },

    ListDataScreen:{
        screen: ListDataScreen,
        navigationOptions:{
            tabBarLabel:'Transactions',
            tabBarIcon:({tintColor})=> (
                <Ionicons name="ios-list" size={24}/>
            )
        }
    }
},
    {   // tabBar options
        animationEnabled: true,
        tabBarPosition:'bottom',
        swipeEnabled:false,
        tabBarOptions: {
          showIcon: true,
          activeTintColor: 'orange',
          inactiveTintColor: 'black',
          labelStyle: {
              fontSize: 12,
          }
    
    }
    });

    const RootNavigation = createStackNavigator({
        Tabs: {
            screen: Tabs
          }
        
    }, {
        headerMode: 'none'
    });

    export default RootNavigation;