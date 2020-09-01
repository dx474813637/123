// pages/chart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1: 3,
    num2: 1,
    num3: 2,
    num4: 4
  },
  handleEvent(e) {
    var obj = e.detail
    this.setData({
      num1: obj['num1'],
      num2: obj['num2']
    })
  },
  handleEvent2(e) {
    var obj = e.detail
    this.setData({
      num3: obj['num1'],
      num4: obj['num2']
    })
  },
  handleClick() {
    this.setData({
      num1: this.data.num1 * 2,
      num2: this.data.num2 * 2,
      num3: this.data.num3 * 2,
      num4: this.data.num4 * 2
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showTabBarRedDot({
      index: 0
    })
    wx.setTabBarBadge({
      index: 0,
      text: '1200'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})