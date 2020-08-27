// pages/robot/robot.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sendMsg: '',
    top: 0,
    dataList: []
  },
  getInfo (e) {
    console.log(e)
    
  },
  sendMsg(e) {
    console.log(e)
    var sendMsg = e.detail.value.chartInp
    this.setData({
      sendMsg: sendMsg
    })
    if(sendMsg) {
      wx.request({
        url: 'https://openapi.tuling123.com/openapi/api/v2',
        method: 'POST',
        data: {
          userInfo: {
            apiKey: "3d0c9dd83c0245279cf43a57818d80a9",
            userId: "6212307151aea3e4"
          },
          reqType: "0",
          perception: {
            inputText: {
              text: sendMsg
            },
            selfInfo: {
              location: {
                city: "杭州",
                province: "浙江",
                street: "莫干山路"
              }
            }
          }
        },
        success: res => {
          console.log(res)
          wx.showToast({
            title: '成功',
            icon: 'success',
          })
          if(res.statusCode == 200) {
            var obj = {
              i: sendMsg,
              r: res.data.results[0].values.text
            }
            this.data.dataList.push(obj)
            this.setData({
              dataList: this.data.dataList
            })
            this.isScrollBottom()
          }
        },
        fail: err => {
          wx.showToast({
            title: '失败',
            icon: 'none',
          })
        }
      })
    }
  },
  isScrollBottom() {
    this.query.select('#list').boundingClientRect()
    this.query.select('#listView').boundingClientRect()
    this.query.exec(res => {
      console.log(res)
      this.setData({
        top: res[0].height - res[1].height
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.query = wx.createSelectorQuery()

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