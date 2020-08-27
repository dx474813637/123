// pages/demo04/demo04.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: 'http://www.100ec.cn/zt/upload_data/zjjy/images/550.jpg',
    // src: 'https://tpc.googlesyndication.com/simgad/8499751422073067901?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnqu7L81YYd4Zmp9Clhp4po5XogzA',
    progress: '',
    p: 0
  },
  download(e) {
    const url = e.currentTarget.dataset.src;
    const downloadTask = wx.downloadFile({
      url: url,
      success: re => {
        console.log(re)
        if(re.statusCode == 200) {
          wx.getSetting({
            success:res =>{
              if (!res.authSetting['scope.writePhotosAlbum']) {
                wx.authorize({
                  scope: 'scope.writePhotosAlbum',
                  success: () => {
                    this.save(re)
                  }
                })
              }else {
                this.save(re)
              }
            }
          })
          
        }
      }
    })
    downloadTask.onProgressUpdate( res => {
      // console.log(res)
      if(res.progress === 100) {
        this.setData({
          progress: ''
        })
      } else {
        this.setData({
          progress: res.progress + '%',
        })
      }
      this.setData({
        p: res.progress
      })
    })
  },
  save (res) {
    wx.saveImageToPhotosAlbum({
      filePath: res.tempFilePath,
      success: re => {
        wx.showToast({
          title: '保存成功',
          success: () => {
            
            this.setData({
              p: 0
            })
          }
        })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '保存失败',
          success: () => {
            
            this.setData({
              p: 0
            })
          }
        })
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