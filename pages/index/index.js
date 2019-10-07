let app = getApp()

Page({
    data: {
        currentTab: 0,
        //这里只做tab名和显示图标
        items: [{
                "text": "主页",
                "iconPath": "/assets/icons/index.png",
                "selectedIconPath": "/assets/icons/index_active.png"
            },
            {
                "text": "列表",
                "iconPath": "/assets/icons/list.png",
                "selectedIconPath": "/assets/icons/list_active.png"
            },
            {
                "text": "我的",
                "iconPath": "/assets/icons/mine.png",
                "selectedIconPath": "/assets/icons/mine_active.png"
            }
        ]
    },

    swichNav: function(e) {
        let that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    },
    onLoad: function(option) {

    }
})