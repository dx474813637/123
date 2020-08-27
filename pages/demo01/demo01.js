// pages/demo01/demo01.js
let left
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [
      {
        name: 'nav1',
        terms: '电商快评'
      },
      {
        name: 'nav2',
        terms: '曝光台'
      },
      {
        name: 'nav3',
        terms: '图解财报'
      },
      {
        name: 'nav4',
        terms: '电商榜单'
      },
      {
        name: 'nav5',
        terms: '电商简评'
      },
      {
        name: 'nav6',
        terms: '电商访谈'
      },
      {
        name: 'nav7',
        terms: '融资事件'
      },
      {
        name: 'nav8',
        terms: '信息图'
      },
      {
        name: 'nav9',
        terms: '电商评级'
      },
      {
        name: 'nav10',
        terms: '电商评测'
      },
    ],
    dataList: [],
    navCurActive: 0,
    winHeight: '',
    winWidth: '',
    loading: false,
    api: 'https://www.100ec.cn/searchjson.html',
    n: 20,
    scrollBottomRequest: false,
    scrollLeft: 0
  },
  handleNavTap(e) {
    console.log(e)
    let index = Number(e.currentTarget.dataset.index )
    // left = e.currentTarget.offsetLeft > this.data.winWidth ? e.currentTarget.offsetLeft - this.data.winWidth/2 : e.currentTarget.offsetLeft/2
    
    this.setData({
      navCurActive: index,
      // scrollLeft: left
    })
  },
  swiperChange(e) {
    // console.log(e)
    let index = Number(e.detail.current )
    left = ( index - 0.5)*90 
    this.setData({
      navCurActive: index,
      scrollLeft: left
    }, () => {
      console.log('滑动：' + index)
      
      if(this.data.dataList[this.data.navCurActive].length == 0) {

        this.getData(this.data.n)
      }
    })
  },
  handleRefresh(e){
    let index = e.currentTarget.dataset.index
    console.log('下拉刷新：' + index)
    // console.log(e)
    this.loading = true
    let name = "dataList[" + index + "]"
    let num = this.data.dataList[index].length
    this.getRequest(this.data.navList[index].terms, num, res => {
      console.log(res.data)
      this.setData({
        [name]: res.data.list,
        loading: false
      }, () => {
        console.log('加载完成：' + index)
      })
    })

  },
  getData(num) {
    if(this.data.scrollBottomRequest) return
    this.data.scrollBottomRequest = true
    let navCurActive = this.data.navCurActive
    let name = "dataList[" + navCurActive + "]"
    wx.showLoading({
      title: '加载中',
    })
    this.getRequest(this.data.navList[navCurActive].terms, num, res => {
      // console.log(res.data)
      this.setData({
        [name]: res.data.list
      })
      this.data.scrollBottomRequest = false
      wx.hideLoading()
    })
  },
  getRequest(key, num, cb) {
    let api = this.data.api
    wx.request({
      url: api, //仅为示例，并非真实的接口地址
      data: {
        terms: key,
        n: num
      },
      success (res) {
        cb && cb(res)
      }
    })
  },
  handleScrollBottom() {
    console.log('bottom')
    let len = this.data.dataList[this.data.navCurActive].length + 10
    this.getData(len)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let num = this.data.navList.length;
    let arr = [];
    for(let i = 0; i < num; i++) {
      arr.push([])
    }
    this.setData({
      dataList: arr
    })
    if(this.data.dataList[this.data.navCurActive].length == 0) {

      this.getData(this.data.n)
    }
    wx.getSystemInfo({
      success: res => {
        console.log(res)
        this.setData({
          winHeight: res.windowHeight - 30,
          winWidth: res.windowWidth
        })
      }
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