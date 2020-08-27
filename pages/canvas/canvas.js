// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    color: '#000',
    pen: 5,
    isClear: false
  },
  changeWidth(e){
    console.log(e)
    this.setData({
      pen: this.data.pen += Number(e.currentTarget.dataset.width)
    })
  },
  changeColor(e) {
    console.log(e)
    this.setData({
      color: e.currentTarget.dataset.color
    })
  },
  handleStart(e) {
    var x = e.touches[0].x
    var y = e.touches[0].y
    this.ctx.setLineCap("round");
    this.ctx.setLineJoin("round");
    // 初始化颜色
    this.ctx.setStrokeStyle(this.data.color);
    // 初始化粗细
    this.ctx.setLineWidth(this.data.pen);
    this.ctx.moveTo(x, y)
  },
  handleMove(e) {
    var x = e.touches[0].x
    var y = e.touches[0].y
    this.ctx.lineTo(x, y) 
    this.ctx.stroke()
    this.ctx.draw(true)
    this.ctx.moveTo(x, y)

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

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.ctx = wx.createCanvasContext('myCan')
    console.log(this.ctx)

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