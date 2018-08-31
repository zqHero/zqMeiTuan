/*
 * @Author: zq_hero
 * @Date: 2018-08-28 17:54:01
 * @LastEditTime: 2018-08-28 17:54:01
 * @csdn: https://blog.csdn.net/u013233097
 * @github: https://github.com/zqHero
 */


import React, { Component } from 'react';
import { View, Image, ScrollView, StatusBar } from 'react-native'

import TabBarItem from '../common/TabBarItem'

export default class MainScene extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        tabBarLabel: '首页',
        header: null,
        tabBarIcon: ({ focused, tintColor }) => (
            <TabBarItem
                focused={focused}
                tintColor={tintColor}
                normalImage={require('../../assets/home_tabbar/tabbar_homepage.png')}
                selectedImage={require('../../assets/home_tabbar/tabbar_homepage_selected.png')}
            />
        ),
    })

    render() {
        return (
            <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#EFEFEF' }}>
                <View style={{ height: 150, flexDirection: 'column', backgroundColor: '#f00' }}>

                </View>
            </ScrollView>
        )
    }
}