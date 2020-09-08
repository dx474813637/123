// custom-tab-bar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    color: "#666666",
    borderStyle: "white",
    selected: 0,
    selectedColor: "#1e90ff",
    list: [{
      pagePath: "/pages/index/index",
      text: "资讯",
      iconPath: "/images/icon-index.png",
      selectedIconPath: "/images/icon-index-active.png"
   }, {
      pagePath: "/pages/zj/index",
      text: "专家",
      iconPath: "/images/icon-zj.png",
      selectedIconPath: "/images/icon-zj-active.png"
   }, {
      pagePath: "/pages/cf/index",
      iconPath: "/images/icon-cf.png",
      selectedIconPath: "/images/icon-cf-active.png"
   }, {
      pagePath: "/pages/dt/index",
      text: "动态",
      iconPath: "/images/icon-dt.png",
      selectedIconPath: "/images/icon-dt-active.png"
   }, {
      pagePath: "/pages/wd/index",
      text: "我的",
      iconPath: "/images/icon-wd.png",
      selectedIconPath: "/images/icon-wd-active.png"
   }]
 },

  /**
   * 组件的方法列表
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    },
    onChange(e) {
      const index = e.detail
      // event.detail 的值为当前选中项的索引
      this.setData({ selected: index });
      wx.switchTab({url: this.data.list[index].pagePath})
    },

  }
})
