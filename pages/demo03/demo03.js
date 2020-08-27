// pages/demo03/demo03.js
let v = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    danmu: '',
    play: false,
    // src: ''
    src: 'https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo-transcode-crf/26040772_607df78a11c973a1b21c2627edf62445_0.mp4',
    danmuList: [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }],
  },
  send() {
    v.sendDanmu({
      text: this.data.danmu,
      color: '#ffffff'
    })
  },
  xx () {
    this.setData({
      play: !this.data.play
    })
    if(this.data.play) {
      v.play()
    }else {
      v.pause()
    }
  },
  getVideo() {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: res => {
        console.log(res)
        this.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  playEvent(e) {
    console.log(e)
    this.setData({
      play: true
    })
  },
  pauseEvent(e) {
    console.log(e)
    this.setData({
      play: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    v = wx.createVideoContext('v')
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