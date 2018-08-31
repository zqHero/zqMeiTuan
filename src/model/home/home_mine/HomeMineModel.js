
export default class HomeMineModel {

    headInfoItems = [];
    mineAboutItems = [];

    constructor() {
        this.initBodyInfo();
        this.initFootInfo();
    }


    initBodyInfo() {
        this.headInfoItems = [
            { img: require('../../../assets/home_mine/my_favorite.png'), text: '我的收藏', label: '' },
            { img: require('../../../assets/home_mine/my_record.png'), text: '我的足迹', label: '' },
            { img: require('../../../assets/home_mine/my_commen.png'), text: '我的评价', label: '' },
            { img: require('../../../assets/home_mine/my_favorite.png'), text: '答谢记录', label: '' },
            { img: require('../../../assets/home_mine/my_address.png'), text: '我的地址', label: '' }
        ]
    }


    initFootInfo() {
        this.mineAboutItems = [
            {
                title: '我的资产',
                headInfoItems: [
                    { img: require('../../../assets/home_mine/red_pa.png'), text: '红包', label: '2个未使用' },
                    { img: require('../../../assets/home_mine/instead_money.png'), text: '代金券', label: '15张未使用' },
                    { img: require('../../../assets/home_mine/my_packet.png'), text: '我的钱包', label: '签到赢奖金' },
                    { img: require('../../../assets/home_mine/quick_pay.png'), text: '闪付', label: ' ' }
                ]
            },
            {
                title: '我的服务',
                headInfoItems: [
                    { img: require('../../../assets/home_mine/help.png'), text: '帮助反馈', label: '' },
                    { img: require('../../../assets/home_mine/helper.png'), text: '客服中心', label: '' },
                ]
            },
            {
                title: '更多推荐',
                headInfoItems: [
                    { img: require('../../../assets/home_mine/red_pa.png'), text: '邀请有奖', label: '' },
                    { img: require('../../../assets/home_mine/instead_money.png'), text: '商家入驻', label: '' },
                    { img: require('../../../assets/home_mine/my_packet.png'), text: '骑手招募', label: '' },
                    { img: require('../../../assets/home_mine/quick_pay.png'), text: '我要合作', label: '' }
                ]
            }
        ]

    }

}


