/*
 * @Author: zq_hero
 * @Date: 2018-08-29 17:02:17
 * @LastEditTime: 2018-08-29 17:02:17
 * @csdn: https://blog.csdn.net/u013233097
 * @github: https://github.com/zqHero
 */

import React, { Component } from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native';

type Props = {
    leftIcon: any,
    isShowLeftIcon: any,
    leftIconStyle: any,

    textInfo: any,
    textStyle: any,

    isShowNavIcon: any,

    onPress: Function
}

export default class TextNavigatorItem extends Component<Props> {

    render() {
        return (
            <TouchableHighlight
                underlayColor={'#eeeeeeee'}
                onPress={this.props.onPress}
            >
                <View style={{
                    height: 55, flex: 1, backgroundColor: '#fff', padding: 5,
                    paddingRight: 15, paddingLeft: 15, alignContent: 'center',
                    flexDirection: 'row', alignItems: 'center'
                }}>
                    {
                        this.props.isShowLeftIcon ?
                            <Image
                                source={this.props.leftIcon}
                                style={this.props.leftIconStyle}
                            /> : null
                    }
                    <Text style={[this.props.textStyle, { flex: 1, marginLeft: 10 }]}>{this.props.textInfo}</Text>
                    {
                        this.props.isShowNavIcon ?
                            <Image
                                source={require('../../assets/right_icon.png')}
                                style={{ height: 12 }}
                            /> : null
                    }
                </View>
            </TouchableHighlight>
        )
    }
}

