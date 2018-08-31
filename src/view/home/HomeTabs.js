/*
 * @Author: zq_hero
 * @Date: 2018-08-28 17:54:13
 * @LastEditTime: 2018-08-28 17:54:13
 * @csdn: https://blog.csdn.net/u013233097
 * @github: https://github.com/zqHero
 */
import { TabNavigator, TabBarBottom } from 'react-navigation'

import MainScene from './MainScene'
import QuickShoping from './QuickShoping'
import OrderFormScene from './OrderFormScene'
import MineScene from './MineScene'

//定义  底部选项卡 Tab
export const HomeTabs = TabNavigator({
    GroupBuy: { screen: MainScene },
    QuickShoping: { screen: QuickShoping },
    OrderForm: { screen: OrderFormScene },
    Mine: { screen: MineScene }
}, {
        //设置参数：
        tabBarComponent: TabBarBottom,
        lazy: false,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: '#F9BE00',
            inactiveTintColor: 'gray',
        }
    }
)