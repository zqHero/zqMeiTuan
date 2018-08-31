/*
 * @Author: zq_hero
 * @Date: 2018-08-28 17:54:22
 * @LastEditTime: 2018-08-28 17:54:22
 * @csdn: https://blog.csdn.net/u013233097
 * @github: https://github.com/zqHero
 */


import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native'

import TabBarItem from '../common/TabBarItem'
export default class QuickShoping extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        tabBarLabel: '闪购',
        header: null,
        tabBarIcon: ({ focused, tintColor }) => (
            <TabBarItem
                focused={focused}
                tintColor={tintColor}
                normalImage={require('../../assets/home_tabbar/tabbar_discover.png')}
                selectedImage={require('../../assets/home_tabbar/tabbar_discover_selected.png')}
            />
        ),
    })

    render() {
        return (
            <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#EFEFEF' }}>
                <View style={{ height: 150, flexDirection: 'column', backgroundColor: '#0ff' }}>

                </View>
            </ScrollView>
        )
    }
}