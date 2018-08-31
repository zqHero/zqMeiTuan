/*
 * @Author: zq_hero
 * @Date: 2018-08-28 20:05:39
 * @LastEditTime: 2018-08-28 20:06:03
 * @csdn: https://blog.csdn.net/u013233097
 * @github: https://github.com/zqHero
 */

import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

type Props = {
    tintColor: any,
    focused: any,
    normalImage: any,
    selectedImage: any,
    showText: any,
    showLabel: any,
}

/**
 * 首页可以有焦点的  tabbaritem的  iamge组件
 */
export default class TabBarItem extends Component<Props> {

    render() {
        const selctedImg = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <View style={{
                justifyContent: 'center', alignItems: 'center',
                flexDirection: 'column', height: 55, width: 55
            }}>
                <Image
                    resizeMode='contain'
                    source={this.props.focused
                        ? selctedImg : this.props.normalImage}
                    style={{ width: 25, height: 25, }}
                />
                {
                    this.props.showText ?
                        <Text style={{ fontSize: 12, color: "#3e3c3d", marginTop: 4 }}>
                            {this.props.showText}</Text> :
                        <View />
                }
                {
                    this.props.showLabel ?
                        <Text style={{ fontSize: 9, color: "gray" }}>
                            {this.props.showLabel}</Text> :
                        <View />
                }
            </View>
        )
    }
}



