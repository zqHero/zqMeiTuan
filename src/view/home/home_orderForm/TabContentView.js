/*
 * @Author: zq_hero
 * @Date: 2018-09-01 18:30:21
 * @LastEditTime: 2018-09-01 18:30:21
 * @csdn: https://blog.csdn.net/u013233097
 * @github: https://github.com/zqHero
 */


import React, { Component } from 'react'
import { View, FlatList, Text, TouchableHighlight, Image, Button } from 'react-native'


export default class TabContentView extends Component {


    render() {
        return (
            <FlatList
                data={[
                    { info: '1' }, { info: '2' }, { info: '3' }, { info: '4' }, { info: '5' },
                    { info: '6' }, { info: '7' }, { info: '8' }, { info: '9' }, { info: '10' },
                    { info: '11' }, { info: '12' }, { info: '13' }, { info: '14' }, { info: '15' },
                    { info: '16' }, { info: '17' }, { info: '18' }, { info: '19' }, { info: '20' },
                    { info: '21' }, { info: '22' }, { info: '23' }, { info: '24' }, { info: '25' },
                    { info: '26' }, { info: '27' }, { info: '28' }, { info: '29' }, { info: '30' },
                ]}
                renderItem={this.renderItem}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.info}
                listKey={(item) => item.info}
            />
        )
    }

    renderItem = ({ item }) => (
        <TouchableHighlight style={{
            margin: 12, marginTop: 6, marginBottom: 6,
            backgroundColor: 'white', elevation: 3, borderRadius: 3, padding: 15
        }}
            onPress={() => {
                alert(item.info)
            }}
            underlayColor={'#00000000'}
        >
            <View style={{ paddingRight: 5, paddingLeft: 5, flex: 1, flexDirection: 'column' }}>
                <View style={{ height: 55, flexDirection: "row", alignItems: 'center' }}>
                    <Image style={{ width: 55, height: 55, borderColor: 'gray', borderWidth: 0.8, borderRadius: 3 }} source={require('../../../assets/home_orderfrom/shop_img1.png')} />
                    <Text style={{ fontSize: 15, color: '#3e3c3d', marginLeft: 15 }}>{'愚公炒面 >'}</Text>
                    <Text style={{ color: '#3e3c3d', fontSize: 17, flex: 1, textAlign: 'right' }}>{'订单已完成'}</Text>
                </View>
                <View style={{ marginLeft: 70, marginTop: 15, flex: 1, flexDirection: 'column' }}>
                    <View style={{ backgroundColor: 'gray', height: 0.5 }} />
                    <Text style={{ fontSize: 13, color: 'gray', marginTop: 15 }}>{'经典小笼卤面       x3'}</Text>
                    <Text style={{ textAlign: 'right', fontSize: 13, color: 'gray', marginTop: 10, flex: 1 }}>{'共一件商品，实付  ￥11.3'}</Text>
                </View>

                <View style={{ marginTop: 20, flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableHighlight
                        style={{
                            borderRadius: 5, height: 36, width: 75, paddingTop: 2,
                            justifyContent: 'center', alignItems: 'center', elevation: 2
                        }}
                        underlayColor={'gray'}
                        onPress={() => { alert('相似商家') }}
                    >
                        <Text style={{ fontSize: 12, color: '#000000' }}>{'相似商家'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{
                            borderRadius: 5, height: 36, width: 75, paddingTop: 2, marginLeft: 15,
                            justifyContent: 'center', alignItems: 'center', elevation: 2
                        }}
                        underlayColor={'gray'}
                        onPress={() => { alert('再来一单') }}
                    >
                        <Text style={{ fontSize: 12, color: '#000000' }}>{'再来一单'}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{
                            borderRadius: 5, height: 36, width: 75, paddingTop: 2, marginLeft: 15,
                            justifyContent: 'center', alignItems: 'center', elevation: 2
                        }}
                        underlayColor={'gray'}
                        onPress={() => { alert('退款详情') }}
                    >
                        <Text style={{ fontSize: 12, color: '#000000' }}>{'退款详情'}</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </TouchableHighlight>
    )
}