import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';
import Detail from './detail';


const appNavigator = createStackNavigator({
    Home:{
        screen: Home,
        navigationOptions:{
            headerShown:false
        }
    },
    Detail : {
        screen:Detail,
        navigationOptions:{
            headerShown:false
        }
    },
},{
    initialRouteName:"Home"
}

);

export default AppContainer = createAppContainer(appNavigator);