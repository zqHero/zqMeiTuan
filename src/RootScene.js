

import React, { Component } from "react";
import { StatusBar, View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { HomeTabs } from "./view/home/HomeTabs/";


import Orientation from 'react-native-orientation'

export default class RootScene extends Component {

    componentWillMount() {
        Orientation.lockToPortrait()
    }

    //定义  底部选项卡 Tab
    render() {
        return (
            <Home />
        )
    }
}

//定义主界面：
const Home = StackNavigator({
    Home: {
        screen: HomeTabs,
    }
})



