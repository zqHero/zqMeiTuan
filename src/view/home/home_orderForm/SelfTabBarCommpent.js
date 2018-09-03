/*
 * @Author: zq_hero
 * @Date: 2018-09-02 21:06:35
 * @LastEditors: OBKoro19-02 22:08:51
 * @LastEditTime: 2018-09-02 22:09:2133097
 * @github: https://github.com/zqHero
 */
import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableHighlight } from 'react-native'

// 未找到更好的实现方法   所以自定义了一个 组件实现滑动动画和头部黏连
// 有更好的方法请告知 


const screenWidth = Dimensions.get('window').width

type Props = {
    titleNames: any,
    clickIndex: any,
    activeTextColor: any,
    unActiveTextColor: any,
    onChecked: any
}

export default class SelfTabBarCommpent extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            clickIndex: this.props.clickIndex ? this.props.clickIndex : 0,
            activeTextColor: this.props.activeTextColor ? this.props.activeTextColor : '#3e3c3d',
            unActiveTextColor: this.props.unActiveTextColor ? this.props.unActiveTextColor : 'gray',
        }
    }

    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ height: 40, backgroundColor: '#FFF', flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        {this.renderChildView()}
                    </View>
                    <View style={{
                        height: 2, width: 13, backgroundColor: '#FFBA1E',
                        borderRadius: 5, marginTop: 4,
                        marginLeft: (screenWidth / this.props.titleNames.length - 15) / 2 +
                            this.state.clickIndex * (screenWidth / this.props.titleNames.length)  //计算 位置  
                    }} />
                </View>
                <View style={{ height: 0.4, backgroundColor: 'gray' }} />
            </View>
        )
    }

    renderChildView() {
        let array = new Array();

        for (let index = 0; index < this.props.titleNames.length; index++) {
            array.push(
                <TouchableHighlight
                    key={index}
                    style={{
                        backgroundColor: '#FFF', width: screenWidth / this.props.titleNames.length,
                        alignItems: 'center', justifyContent: 'center'
                    }}
                    onPress={() => {
                        this.setState({
                            clickIndex: index
                        })
                        this.props.onChecked(index)
                    }}
                    underlayColor={'#FFF'}
                >
                    <Text style={{
                        fontSize: 12, margin: 2,
                        color: this.state.clickIndex === index ? this.state.activeTextColor : this.state.unActiveTextColor
                    }}> {this.props.titleNames[index]} </Text>
                </TouchableHighlight>
            )
        }
        return array
    }
}



// 下面的写法  太水   换

// <View style={{ backgroundColor: '#FFF', width: screenWidth / 3, alignItems: 'center', justifyContent: 'center' }}>
//                             <TouchableHighlight
//                                 onPress={() => {
//                                     this.setState({
//                                         clickIndex: 0
//                                     })
//                                     this.props.onChecked(0)
//                                 }}
//                                 underlayColor={'#FFF'}
//                             >
//                                 <Text style={{ fontSize: 12, color: this.state.clickIndex === 0 ? this.state.activeTextColor : this.state.unActiveTextColor }}> {'全部订单'} </Text>
//                             </TouchableHighlight>
//                         </View>
//                         <View style={{ backgroundColor: '#FFF', width: screenWidth / 3, alignItems: 'center', justifyContent: 'center' }}>
//                             <TouchableHighlight
//                                 onPress={() => {
//                                     this.setState({
//                                         clickIndex: 1
//                                     })
//                                     this.props.onChecked(1)
//                                 }}
//                                 underlayColor={'#FFF'}
//                             >
//                                 <Text style={{ fontSize: 12, color: this.state.clickIndex === 1 ? this.state.activeTextColor : this.state.unActiveTextColor }}> {'待评价'} </Text>
//                             </TouchableHighlight>
//                         </View>
//                         <View style={{ backgroundColor: '#FFF', width: screenWidth / 3, alignItems: 'center', justifyContent: 'center' }}>
//                             <TouchableHighlight
//                                 onPress={() => {
//                                     this.setState({
//                                         clickIndex: 2
//                                     })
//                                     this.props.onChecked(2)
//                                 }}
//                                 underlayColor={'#FFF'}
//                             >
//                                 <Text style={{ fontSize: 12, color: this.state.clickIndex === 2 ? this.state.activeTextColor : this.state.unActiveTextColor }}> {'退款'} </Text>
//                             </TouchableHighlight>
//                         </View>