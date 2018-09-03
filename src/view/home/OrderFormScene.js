/*
 * @Author: zq_hero
 * @Date: 2018-08-28 17:30:40
 * @LastEditors: OBKoro1
 * @LastEditTime: 2018-09-02 21:44:19
 * @Description: csdn:https://blog.csdn.net/u013233097
 */

import React, { Component } from 'react';
import {
    View, Image, ScrollView, Text, TouchableHighlight, FlatList,
    Dimensions, SectionList, ViewPagerAndroid
} from 'react-native'
import { TabBarBottom, StackNavigator, TabNavigator } from 'react-navigation'

import OrderFormModel from '../../model/home/home_orderfrom/OrderFormModel';

import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view'
import TabItemView from '../common/TabItemView'
import TabContentView from './home_orderForm/TabContentView'

import SelfTabBarCommpent from './home_orderForm/SelfTabBarCommpent'


const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

export default class OrderFormScene extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentTab: 0,
        }
    }

    static defaultProps = {
        model: new OrderFormModel()
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        tabBarLabel: '订单',
        header: (
            <View style={{ height: 65, backgroundColor: '#fff', paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: '#000000' }}>{'订单'}</Text>
            </View>
        ),
        tabBarIcon: ({ focused, tintColor }) => (
            <TabItemView
                focused={focused}
                tintColor={tintColor}
                normalImage={require('../../assets/home_tabbar/tabbar_order.png')}
                selectedImage={require('../../assets/home_tabbar/tabbar_order_selected.png')}
            />
        ),
    })


    // {this.renderHeaderView()}
    // <View style={{
    //     height: 40, padding: 5,
    //     paddingRight: 15, paddingLeft: 15, alignContent: 'center',
    //     flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff'
    // }}>
    //     <Text style={{ flex: 1, marginLeft: 10, color: "#3e3c3d", fontSize: 18 }}>{'我的订单'}</Text>
    // </View>
    // <SelfTabBarCommpent
    //     titleNames={['全部订单', '待评价', '退款']}
    //     clickIndex={0}
    //     activeTextColor={'#3e3c3d'}
    //     unActiveTextColor={'gray'}
    //     onChecked={(checkedIndex) => {
    //     }}
    // />

    render() {
        return (
            <ScrollView style={{
                backgroundColor: '#FFFFFF', flex: 1, flexDirection: 'column'
            }}
            >
                <View style={{ backgroundColor: 'red', flex: 1, flexDirection: 'column' }}>

                </View>
            </ScrollView>
        )
    }

    //     <ViewPagerAndroid
    //     style={{ backgroundColor: 'red', flex: 1 }}
    //     horizontal={true}
    //     initialPage={0}
    // >
    //     <View style={{ backgroundColor: 'red' }}>
    //         <TabContentView />
    //     </View>
    //     <View style={{ backgroundColor: 'yellow' }}>
    //         <TabContentView />
    //     </View>
    //     <View style={{ backgroundColor: 'gray' }}>
    //         <TabContentView />
    //     </View>
    // </ViewPagerAndroid>

    /**
     * 1, 绘制头部   高度为  40+130
     */
    renderHeaderView() {
        return (
            <View style={{ flexDirection: 'column', backgroundColor: '#fff' }}>
                <TouchableHighlight
                    underlayColor={'#00000000'}
                    onPress={() => { alert('最近常买') }}>
                    <View style={{
                        height: 40, padding: 5, paddingRight: 15, paddingLeft: 15, alignContent: 'center',
                        flexDirection: 'row', alignItems: 'center'
                    }}>
                        <Text style={{ flex: 1, marginLeft: 10, color: "#3e3c3d", fontSize: 18 }}>{'最近常买'}</Text>
                        <View style={{ flexDirection: 'row', width: 90 }}>
                            <Text style={{ flex: 1, marginLeft: 10, color: "#3e3c3d", fontSize: 10 }}>{'查看9个商家'}</Text>
                            <Image source={require('../../assets/right_icon.png')} style={{ height: 12 }} />
                        </View>
                    </View>
                </TouchableHighlight>
                <FlatList
                    style={{ padding: 5 }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.props.model.oftenBuyItems}
                    keyExtractor={(item) => item.shopName}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            underlayColor={'#00000000'}
                            onPress={() => {
                                alert(item.shopName)
                            }}
                        >
                            <View style={{
                                alignItems: 'center', justifyContent: 'center', height: 120, width: 120,
                                backgroundColor: '#fff', margin: 5, flexDirection: 'column', shadowRadius: 10,
                                elevation: 5, shadowOpacity: 0.5,
                            }}>
                                <Image source={item.img} style={{ width: 50, height: 50 }} />
                                <Text style={{ color: '#3e3c3d', fontSize: 12, marginTop: 8 }}>{item.shopName + ""}</Text>
                                <Text style={{ marginTop: 7, color: '#F1B632', fontSize: 8, borderColor: '#F1B632', borderWidth: 0.8, padding: 2 }}>{item.times}</Text>
                            </View>
                        </TouchableHighlight>
                    )}
                    ListFooterComponent={() => (
                        <TouchableHighlight style={{
                            alignItems: 'center', justifyContent: 'center', height: 120, width: 120,
                            backgroundColor: '#fff', margin: 5, flexDirection: 'column', shadowRadius: 10,
                            elevation: 5, shadowOpacity: 0.5, marginRight: 15
                        }}
                            underlayColor={'#00000000'}
                            onPress={() => { alert('查看更多') }}>
                            <Text style={{ color: 'gray', fontSize: 10 }}>{'查看更多'}</Text>
                        </TouchableHighlight>
                    )}
                />
            </View>
        )
    }
}

/**
 * tab：
 */
const Tabs = TabNavigator({
    tab1: {
        screen: TabContentView,
        navigationOptions: {
            tabBarLabel: '全部订单',
        }
    },
    tab2: {
        screen: TabContentView,
        navigationOptions: {
            tabBarLabel: '待评价',
        }
    },
    tab3: {
        screen: TabContentView,
        navigationOptions: {
            tabBarLabel: '退款',
        }
    },
}, {
        tabBarOptions: {
            activeTintColor: '#3e3c3d',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#FFFFFF',
                height: 39,
                elevation: 0
            },
            //tab bar的文本样式
            labelStyle: { fontSize: 12 },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: {
                height: 2, width: 14, borderRadius: 5, marginLeft: (screenWidth / 3 - 14) / 2
            },
        },
        tabBarPosition: 'top',

        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
    }
);