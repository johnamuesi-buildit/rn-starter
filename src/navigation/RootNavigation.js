import React, {Component} from 'react';
// https://oblador.github.io/react-native-vector-icons/
import Ionicons from 'react-native-vector-icons/Ionicons';

// import {LoginScreen} from './routes';

import {HomeScreen} from '../screens/HomeScreen/HomeScreen'
import {BalanceScreen} from '../screens/BalanceScreen/BalanceScreen'
import {ContactScreen} from '../screens/ContactScreen/ContactScreen'
import {ListDataScreen} from '../screens/ListDataScreen/ListDataScreen'
import TasksScreen from '../screens/TasksScreen/TasksScreen'
import LoginScreen from '../screens/LoginScreen/LoginScreen'

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';


export const Tabs = createBottomTabNavigator({

    LoginScreen:{
        screen: LoginScreen,
        navigationOptions:{

            tabBarLabel:'Login',
            tabBarIcon:({tintColor})=> (
                <Ionicons name="ios-list" size={25}/>
            )
        }
    
    },

    TasksScreen:{
        screen: TasksScreen,
        navigationOptions:{

            tabBarLabel:'Loans',
            tabBarIcon:({tintColor})=> (
                <Ionicons name="ios-list" size={25}/>
            )
        }
    },
    HomeScreen:{
        screen: HomeScreen,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon:({tintColor})=> (
                <Ionicons name="ios-home" size={25}/>
            )
        }
    },

    BalanceScreen:{
        screen: BalanceScreen,
        navigationOptions:{
            tabBarLabel:'Balance',
            tabBarIcon:({tintColor})=> (
                <Ionicons name="ios-cash" size={25}/>
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