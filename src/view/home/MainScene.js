/*
 * @Author: zq_hero
 * @Date: 2018-08-28 17:54:01
 * @LastEditTime: 2018-08-28 17:54:01
 * @csdn: https://blog.csdn.net/u013233097
 * @github: https://github.com/zqHero
 */
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StatusBar, ViewPagerAndroid } from 'react-native'
import TabItemView from '../common/TabItemView'

import TabContentView from './home_orderForm/TabContentView'


export default class MainScene extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        tabBarLabel: '首页',
        header: null,
        tabBarIcon: ({ focused, tintColor }) => (
            <TabItemView
                focused={focused}
                tintColor={tintColor}
                normalImage={require('../../assets/home_tabbar/tabbar_homepage.png')}
                selectedImage={require('../../assets/home_tabbar/tabbar_homepage_selected.png')}
            />
        ),
    })

    componentDidMount() {

    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: 'blue', display: 'flex' }}>
                <View style={{ backgroundColor: 'green' }}>
                    <Text>{'adsadsdsad'}</Text>
                </View>
            </ScrollView>
        )
    }
}