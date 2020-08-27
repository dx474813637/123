// pages/demo02/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    startX: 0,
    startY: 0,
    itemIndex: 0
  },
  touchStart (e) {
    console.log(e)
    let arr = this.data.list;
    arr.forEach((ele, i) => {
      if(ele.flag) {
        ele.flag = false
      }
    })
    this.setData({
      list: arr,
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      itemIndex: e.currentTarget.dataset.index
    })
  },
  touchMove (e) {
    let startX = this.data.startX,
    startY = this.data.startY,
    moveX = e.changedTouches[0].clientX - startX,
    moveY = e.changedTouches[0].clientY - startY,
    deg = this.changeDeg({moveX, moveY}),
    f = false
    if(moveX > 0) {
      f = false
    }else {
      deg < 30 ? f = true: f = false
    }
    this.setData({
      ['list[' + this.data.itemIndex + '].flag']: f
    })
  },
  del(e) {
    console.log(e)
    let arr = this.data.list
    wx.showModal({
      title: '警告',
      content: '是否删除这篇文章，文章标题为：'+this.data.list[this.data.itemIndex].content + '？',
      success: (res) => {
        if (res.confirm) {
          console.log('用户点击确定')
          arr.splice(this.data.itemIndex, 1)
          this.setData({
            list: arr
          }, () => {
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 1000
            })
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  changeDeg(obj) {
    // let z = Math.sqrt(Math.pow(obj.moveX,2)+Math.pow(obj.moveY,2));
    let cos = Math.abs(obj.moveY) / Math.abs(obj.moveX);
    let radian = Math.atan(cos);
    let angle = Math.floor(180 / (Math.PI / radian));
    return angle
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = []
    for(let i = 0 ; i < 20; i++) {
      arr.push({content: i + '：我是新闻文章信息列表内容balabala我是新闻文章信息列表内容', flag: false})
    }
    this.setData({
      list: arr
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