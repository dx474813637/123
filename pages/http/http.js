// pages/http/http.js
let http = require("../../utils/http.js")
console.log('qan2')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  http() {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    console.log(http)
    http('http://www.100ec.cn/Index/global_json.html', {cate: '中国'})
      .then(res => {
        console.log(res)
        return http('http://www.100ec.cn/Index/global_json.html', {cate: '美国'})
      })
      .then(res => {
        console.log(res)
        // return 1
        return new Promise( (resolve, reject) => {
          reject(2)
        })
      })
      .then( res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
    // const p1 = new Promise( (res, rej) => {
    //   wx.request({
    //     url: 'http://www.100ec.cn/Index/global_json.html',
    //     data: {
    //       cate: '中国'
    //     },
    //     success: re => {
    //       res(re)
    //     }
    //   })
    // })

    // p1.then(re => {
    //   console.log(re)
    //   return new Promise( (res, rej) => {
    //     wx.request({
    //       url: 'http://www.100ec.cn/Index/global_json.html',
    //       data: {
    //         cate: '美国'
    //       },
    //       success: r => {
    //         res(r)
    //       }
    //     })
    //   })
    // }).then( res => {
    //   console.log(res)
    // })






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