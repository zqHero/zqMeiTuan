/*
 * @Author: zq_hero
 * @Date: 2018-08-28 17:54:13
 * @LastEditTime: 2018-08-28 17:54:13
 * @csdn: https://blog.csdn.net/u013233097
 * @github: https://github.com/zqHero
 */
import React, { Component } from 'react'
import {
    TabNavigator,
    TabBarBottom,
    Text,
    TouchableOpacity,
    Image,
    View
} from 'react-navigation'

import MainScene from './MainScene'
import QuickShoping from './QuickShoping'
import OrderFormScene from './OrderFormScene'
import MineScene from './MineScene'

import ScrollableTabView, { ScrollableTabBar, DefaultTabBar } from 'react-native-scrollable-tab-view'


//定义  底部选项卡 Tab  方法 一：
export const HomeTabs = TabNavigator({
    GroupBuy: { screen: MainScene },
    QuickShoping: { screen: QuickShoping },
    OrderForm: { screen: OrderFormScene },
    Mine: { screen: MineScene }
}, {
        //设置参数：
        tabBarComponent: TabBarBottom,

        lazy: true,
        swipeEnabled: false,
        animationEnabled: false,

        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#F9BE00',
            inactiveTintColor: 'gray',
        }
    }
)


//========================================第二种 Tab 实现方式：有点小bug================================================


// const tabTitles = ['首页', '快购', '订单', '我的'];
// //默认图标
// const tabIcon = [
//     require('../../assets/home_tabbar/tabbar_homepage.png'),
//     require('../../assets/home_tabbar/tabbar_discover.png'),
//     require('../../assets/home_tabbar/tabbar_order.png'),
//     require('../../assets/home_tabbar/tabbar_mine.png')
// ];
// //选中图标
// const tabSelectedIcon = [
//     require('../../assets/home_tabbar/tabbar_homepage_selected.png'),
//     require('../../assets/home_tabbar/tabbar_discover_selected.png'),
//     require('../../assets/home_tabbar/tabbar_order_selected.png'),
//     require('../../assets/home_tabbar/tabbar_mine_selected.png')
// ];

// export default class HomeTabs extends Component {

//     render() {
//         return (
//             <ScrollableTabView
//                 renderTabBar={() =>
//                     <MainTabBottom
//                         tabNames={tabTitles}
//                         tabIconNames={tabIcon}
//                         selectedTabIconNames={tabSelectedIcon} />}

//                 locked={true}
//                 tabBarPosition={'bottom'}
//                 tabBarUnderlineStyle={{ height: 0, backgroundColor: 'red' }}
//                 tabBarActiveTextColor={'#000'}
//                 scrollWithoutAnimation={true}
//             >
//                 <MainScene tabLabel='首页' />
//                 <QuickShoping tabLabel='快购' />
//                 <OrderFormScene tabLabel='订单' />
//                 <MineScene tabLabel='我的' />

//             </ScrollableTabView>
//         )
//     }
// }

// type Props2 = {
//     goToPage: any,
//     activeTab: any,
//     tabs: any,

//     tabNames: any,
//     tabIconNames: any,
//     selectedTabIconNames: any
// }

// //实现 底部 自定义  tabView:
// class TabBottomView extends Component<Props2> {

//     render() {
//         return (
//             <View style={{
//                 flexDirection: 'row',
//                 height: 45,
//                 borderTopColor: '#d9d9d9',
//                 borderTopWidth: 0.5
//             }}>
//                 {this.props.tabs.map((tab, i) => {
//                     let color = this.props.activeTab === i ? '#3e3c3d' : 'gray';
//                     let icon = this.props.activeTab == i ? this.props.selectedTabIconNames[i] : this.props.tabIconNames[i];
//                     return (
//                         <TouchableOpacity
//                             key={i}
//                             activeOpacity={0.8}
//                             style={{
//                                 flex: 1,
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                             }}
//                             onPress={() => this.props.goToPage(i)}>
//                             <View style={{
//                                 flexDirection: 'column',
//                                 alignItems: 'center',
//                                 justifyContent: 'space-around'
//                             }}>
//                                 <Image
//                                     style={{
//                                         width: 23,
//                                         height: 23,
//                                         marginBottom: 2
//                                     }}
//                                     source={icon} />
//                                 <Text style={{ color: color, fontSize: 11, marginTop: 1 }}>
//                                     {this.props.tabNames[i]}
//                                 </Text>
//                             </View>
//                         </TouchableOpacity>
//                     )
//                 })}
//             </View>
//         );
//     }
// }