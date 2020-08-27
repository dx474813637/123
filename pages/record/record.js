// pages/record/record.js
const InnerAudioContext =  wx.createInnerAudioContext()
const RecorderManager = wx.getRecorderManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: ''
  },
  fang() {
    InnerAudioContext.onPlay( () => {
      console.log('play音频')
    })
    InnerAudioContext.onError((res) => {
      console.log(res)
    })
    InnerAudioContext.auto = true
    InnerAudioContext.src = this.data.path
    InnerAudioContext.play()
    
  },
  startRecord() {
    console.log('x')
    wx.startRecord({
      success: res => {
        console.log(res)
        this.setData({
          path: res.tempFilePath
        })
        
      }
    })
  },
  stopRecord() {
    wx.stopRecord()
  },
  startRecordnew() {
    RecorderManager.start()
  },
  stopRecordnew() {
    RecorderManager.stop()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.r = wx.getRecorderManager()
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
    RecorderManager.onStart(() => {
      console.log('start new')
    })
    RecorderManager.onStop(res => {
      console.log('stop new')
      console.log(res)
      this.setData({
        path: res.tempFilePath
      })
    })
    RecorderManager.onError((err) => {
      console.log(err)
    })
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