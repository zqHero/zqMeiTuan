/*
 * @Author: zq_hero
 * @Date: 2018-09-01 22:17:06
 * @LastEditors: OBKoro1
 * @LastEditTime: 2018-09-01 22:58:04
 * @Description: 
 * @csdn: https://blog.csdn.net/u013233097
 * @github: https://github.com/zqHero
 */
import React, { Component } from "react";
import {
    StatusBar, View, Animated, Text, Easing,
    TouchableHighlight, Dimensions, ViewPagerAndroid
} from 'react-native';
import Orientation from 'react-native-orientation'

import { StackNavigator } from 'react-navigation';
// import HomeTabs from "./view/home/HomeTabs";

import { HomeTabs } from "./view/home/HomeTabs/";

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
