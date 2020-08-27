// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: '',
    y: '',
    locationFlag: false,
    markers: [{
      iconPath: "../../img/location.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
    controls: [{
      id: 1,
      iconPath: '../../img/location.png',
      position: {
        left: 163,
        top: 125,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },

  controltap(e) {
    console.log(e)
    
  },
  getCenter(cb) {
    this.map.getCenterLocation({
      success: res => {
        console.log(res)
        this.setData({
          x: res.longitude,
          y: res.latitude
        })
        cb && cb()
      },
    })
  },
  moveCurTo() {
    this.setData({
      locationFlag: true
    })
    this.map.moveToLocation()
  },
  moveTo() {
    this.setData({
      locationFlag: false
    })
    this.map.moveToLocation({
      longitude: this.data.x,
      latitude: this.data.y
    })
  },
  moveMarkerTo() {
    this.getCenter( () => {

      this.map.translateMarker({
        markerId: 0,
        destination: {
          longitude: this.data.x,
          latitude: this.data.y
        },
        success: res => {
          console.log('success')
        },
        animationEnd: res => {
          console.log('end')
        }
      })
    })
  },
  markertap(e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.map = wx.createMapContext("mymap")
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