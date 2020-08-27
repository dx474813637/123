// pages/demo06/demo06.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['itemA', 'itemB', 'itemC'],
      success: res => {
        console.log(res)
      },
      fail: err => {
        console.log(err)
      }
    })
  },
  navigate() {
    wx.navigateTo({
      url: '/pages/demo05/demo05',
      events: {
        getMsg(res) {
          console.log(res)
        }
      },
      success: (res) => {
        console.log('navigate:success')
        res.eventChannel.emit('getMsg', 'dx')
      }
    })
  },
  switchTab() {
    wx.switchTab({
      url: '/pages/book/index',
      success: () => {
        console.log('switchTab:success')
      }
    })
  },
  reLaunch() {
    wx.reLaunch({
      "url": '/pages/demo05/demo05',
      success: () => {
        console.log('reLaunch:success')
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showNavigationBarLoading()
    setTimeout( () => {
      
      wx.hideNavigationBarLoading()
    }, 1000)
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