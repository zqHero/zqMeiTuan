/*
 * @Author: zq_hero
 * @Date: 2018-08-28 17:53:28
 * @LastEditTime: 2018-08-28 17:53:28
 * @csdn: https://blog.csdn.net/u013233097
 * @github: https://github.com/zqHero
 */
import React, { Component } from 'react';
import { View, Image, ScrollView, StatusBar, FlatList, Text, Dimensions, TouchableHighlight } from 'react-native'

import TabBarItem from '../common/TabBarItem'
import TextNavigatorItem from '../common/TextNavigatorItem'
import RoundAvatar from '../common/RoundAvatar'

import HomeMineModel from '../../model/home/home_mine/HomeMineModel'

let screenWidth = Dimensions.get('window').width


export default class MineScene extends Component {

    static defaultProps = {
        model: new HomeMineModel()
    }

    static navigationOptions = ({ navigation, screenProps }) => ({
        tabBarLabel: '我的',
        header: null,
        tabBarIcon: ({ focused, tintColor }) => (
            <TabBarItem
                focused={focused}
                tintColor={tintColor}
                normalImage={require('../../assets/home_tabbar/tabbar_mine.png')}
                selectedImage={require('../../assets/home_tabbar/tabbar_mine_selected.png')}
            />
        ),
    })


    /**
     * scrollView 移动事件 处理
     */
    onScroll(event) {

        // console.log(event.nativeEvent.contentOffset.x);//水平滚动距离
        console.log(event.nativeEvent.contentOffset.y);//垂直滚动距离

        //scrollView  移动上限
        let maxScrollLength = 65
        let scrollY = event.nativeEvent.contentOffset.y;
        //速率
        let speed = (scrollY >= maxScrollLength ? maxScrollLength : scrollY) / maxScrollLength

        //1,实现 导航栏渐变：
        this._headView.setNativeProps({
            style: { backgroundColor: '#fff' },
            opacity: speed
        });


        let comWidth = 50
        let comHeight = 16
        this._headerTitleText.measure((fx, fy, width, height, px, py) => {
            comWidth = width
            comHeight = height
        })

        //控件最大实际移动距离     88为最初的marginTop高度  65为导航栏和状态栏高度  20为状态栏高度  90为marginleft   计算有点误差注意精确
        let transMaxY = (88 - 65) + ((65 - 20 + comHeight) / 2)
        let transMaxX = (screenWidth - comWidth) / 2 - 90

        //2,实现 titleText 移动:
        this._headerTitleText.setNativeProps({
            style: {
                // 5 为误差  可能计算方法有误  大概有个5像素的偏移
                marginTop: 88 - (speed * transMaxY) - 5,
                marginLeft: 90 + (speed * transMaxX)
            }
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flexDirection: 'column', backgroundColor: '#EFEFEF' }}
                    onScroll={(event) => {
                        this.onScroll(event)
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {this.renderHeaderView()}
                    {this.renderBodyView()}
                    {this.renderFootView()}
                </ScrollView>

                <View ref={(c) => this._headView = c}
                    style={{
                        width: screenWidth, height: 65, position: "absolute",
                        flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',
                    }}
                />
                <View style={{
                    width: screenWidth, position: "absolute",
                    marginTop: 30, flexDirection: 'row', justifyContent: 'flex-end',

                }}>
                    <TouchableHighlight
                        style={{ width: 40 }}
                        onPress={() => {
                            alert('设置')
                        }}
                        underlayColor={'#00000000'}
                    >
                        <Image source={require('../../assets/home_mine/mine_setting.png')} style={{ width: 25, height: 25 }} />
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{ width: 40 }}
                        onPress={() => {
                            alert('消息中心')
                        }}
                        underlayColor={'#00000000'}
                    >
                        <Image source={require('../../assets/home_mine/mine_message.png')} style={{ width: 25, height: 25 }} />
                    </TouchableHighlight>
                </View>
                <TouchableHighlight ref={(f) => this._headerTitleText = f} style={{
                    marginTop: 88,
                    position: "absolute",
                    //计算  marginLeft === 头像宽度-marginLeft
                    marginLeft: 90
                }}
                    onPress={() => {
                        alert('转到我的评价')
                    }}
                    underlayColor={'#00000000'}
                >
                    <Text style={{ fontSize: 18, color: '#000000' }}>{'zq_Hero'}</Text>
                </TouchableHighlight>
            </View>
        )
    }

    /**
     * 1，绘制  头部
     */
    renderHeaderView = () => (
        <View style={{
            height: 145, flexDirection: 'row', paddingLeft: 25, alignItems: 'center',
            backgroundColor: '#F9BE00', marginBottom: 10, paddingTop: 70
        }}>
            <RoundAvatar
                imgSrc={require('../../assets/avatar.jpg')}
                onPress={() => {
                    alert('点击了头像')
                }}
            />
            <TouchableHighlight style={{ marginLeft: 9, marginTop: 30 }}
                onPress={() => {
                    alert('个人信息')
                }}
                underlayColor={'#00000000'}
            >
                <Text style={{ fontSize: 10, color: '#3e3c3d' }}>{'个人信息 >'}</Text>
            </TouchableHighlight>
        </View>
    )

    /**
     * 2,绘制中间部分
     */
    renderBodyView = () => (
        <View>
            <FlatList
                numColumns={4}
                data={this.props.model.headInfoItems}
                renderItem={this.renderItem}
                keyExtractor={this.key}
                style={{
                    backgroundColor: "#fff", padding: 10, paddingBottom: 10, marginBottom: 10
                }}
            />
            <TextNavigatorItem
                leftIcon={require('../../assets/home_mine/red_packet.png')}
                isShowLeftIcon={true}
                leftIconStyle={{ width: 45, height: 30 }}
                textInfo={'已获得120元红包'}
                textStyle={{ color: '#895A3D', fontSize: 17 }}
                isShowNavIcon={true}
                onPress={() => {
                    alert('红包套餐')
                }}
            />
        </View>
    )

    /**
     * 3,绘制底部 list数据
     */
    renderFootView() {
        return (
            <FlatList
                data={this.props.model.mineAboutItems}
                renderItem={this.renderInfoItem}
                keyExtractor={this.infoItemkey}
            />
        )
    }

    infoItemkey = (item: mineAboutItem, index) => item.title

    renderItem = ({ item }) => (
        <TouchableHighlight style={{
            justifyContent: 'center', alignItems: 'center', width: (screenWidth - 20) / 4
        }}
            onPress={() => {
                alert(item.text)
            }}
            underlayColor='#fff'
        >
            <TabBarItem
                normalImage={item.img}
                showText={item.text}
                showLabel={item.label}
            />
        </TouchableHighlight>
    )


    renderInfoItem = ({ item }) => (
        <View style={{ flex: 1, flexDirection: 'column', marginTop: 10, backgroundColor: '#fff', padding: 12, paddingRight: 0 }}>
            <Text style={{ fontSize: 14, color: '#3e3c3d', marginBottom: 10 }}>{item.title}</Text>
            <View style={{ flex: 1, height: 0.6, backgroundColor: 'gray' }} />
            <FlatList
                numColumns={4}
                data={item.headInfoItems}
                renderItem={this.renderItem}
                keyExtractor={this.key}
                style={{ marginTop: 15 }}
            />
        </View>
    )

    key = (item: headInfoItem, index) => item.index

}

