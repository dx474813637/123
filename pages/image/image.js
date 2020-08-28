// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    downImg: ''
  },
  chooseImage() {
    wx.chooseImage({
      count: 5,
      success: res => {
        console.log('选择图片')
        console.log(res)
        this.setData({
          imgList: res.tempFilePaths
        })
      }
    })
  },
  getInfo() {
    wx.getImageInfo({
      src: this.data.imgList[0],
      success: res => {
        console.log('获取信息')
        console.log(res)
      }
    })
  },
  preview() {
    wx.previewImage({
      urls: this.data.imgList,
      success: res => {
        console.log('预览')
      }
    })
  },
  download() {
    wx.downloadFile({
      url: 'https://gss3.bdstatic.com/84oSdTum2Q5BphGlnYG/timg?wapp&quality=80&size=b150_150&subsize=20480&cut_x=0&cut_w=0&cut_y=0&cut_h=0&sec=1369815402&srctrace&di=459207c19b4dd7f55fd151646416a46c&wh_rate=null&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fpic%2Fitem%2F80ad033a5bb5c9ea69c427b4c239b6003af3b36d.jpg',
      success: res => {
        console.log(res)
        this.setData({
          downImg: res.tempFilePath
        })
      }
    })
  },
  save() {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.downImg,
      success: res => {
        console.log('保存')
      }
    })
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