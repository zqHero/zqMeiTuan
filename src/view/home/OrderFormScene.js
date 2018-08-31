/*
 * @Author: zq_hero
 * @Date: 2018-08-28 17:30:40
 * @LastEditors: OBKoro1
 * @LastEditTime: 2018-08-28 20:34:45
 * @Description: csdn:https://blog.csdn.net/u013233097
 */

import React, { Component } from 'react';
import { View, Image, ScrollView, Text, TouchableHighlight, FlatList } from 'react-native'

import TabBarItem from '../common/TabBarItem'
import OrderFormModel from '../../model/home/home_orderfrom/OrderFormModel'


export default class OrderFormScene extends Component {

    static defaultProps = {
        model: new OrderFormModel()
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        tabBarLabel: '订单',
        header: () => (
            <View style={{ height: 65, backgroundColor: '#fff', paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: '#000000' }}>{'订单'}</Text>
            </View>
        ),
        tabBarIcon: ({ focused, tintColor }) => (
            <TabBarItem
                focused={focused}
                tintColor={tintColor}
                normalImage={require('../../assets/home_tabbar/tabbar_order.png')}
                selectedImage={require('../../assets/home_tabbar/tabbar_order_selected.png')}
            />
        ),
    });

    render() {
        return (
            <ScrollView style={{ flex: 1, flexDirection: 'column', backgroundColor: '#EFEFEF' }}>
                {this.renderHeaderView()}

            </ScrollView>
        )
    }


    /**
     * 1, 绘制头部
     */
    renderHeaderView() {
        return (
            <View style={{ flexDirection: 'column', backgroundColor: '#fff' }}>
                <TouchableHighlight
                    underlayColor={'#00000000'}
                    onPress={() => {
                        alert('最近常买')
                    }}>
                    <View style={{
                        height: 40, padding: 5,
                        paddingRight: 15, paddingLeft: 15, alignContent: 'center',
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
                    keyExtractor={this.oftenBuyKeyExt}
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
                                elevation: 5,
                                shadowOpacity: 0.5,
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
                            elevation: 5,
                            shadowOpacity: 0.5,
                        }}
                            underlayColor={'#00000000'}
                            onPress={() => {
                                alert('查看更多')
                            }}
                        >
                            <Text style={{ color: 'gray', fontSize: 10 }}>{'查看更多'}</Text>
                        </TouchableHighlight>
                    )}
                />
            </View>
        )
    }

    oftenBuyKeyExt = (item) => item.shopName
}