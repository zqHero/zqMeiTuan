/*
 * @Author: zq_hero
 * @Date: 2018-08-30 19:44:36
 * @LastEditTime: 2018-08-30 19:44:36
 * @csdn: https://blog.csdn.net/u013233097
 * @github: https://github.com/zqHero
 */


import React, { Component } from 'react';
import { View, Image, TouchableHighlight } from 'react-native'


type Props = {
    imgSrc: any,
    onPress: Function
}

export default class RoundAvatar extends Component<Props> {

    render() {
        return (
            <TouchableHighlight style={{
                width: 56, height: 56, backgroundColor: '#fff', borderRadius: 28,
                alignItems: 'center', justifyContent: 'center'
            }}
                underlayColor={'gray'}
                onPress={() => this.props.onPress()}
            >
                <Image style={{ width: 54, height: 54, borderRadius: 27 }} source={this.props.imgSrc} />
            </TouchableHighlight>
        )
    }
}


