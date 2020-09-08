// pages/zj/index.js
const Mock = require('../../utils/mock-min.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    curIndex: 0,
    navList: [
      {
        name: '活跃',
        type: '',
      },
      {
        name: '最新',
        type: '',
      },
      {
        name: '金融',
        type: '',
      },
      {
        name: '商业',
        type: '',
      },
      {
        name: '经济',
        type: '',
      },
      {
        name: '科技',
        type: '',
      },
      {
        name: '房产',
        type: '',
      },
      {
        name: '文娱',
        type: '',
      },
      {
        name: '医疗',
        type: '',
      },
      {
        name: '社会',
        type: '',
      },
    ],
    isRank: true,
    isLoading: false
  },
  addNextPage() {
    if(this.data.isLoading) return
    const index = this.data.curIndex
    this.setData({
      isLoading: true
    })
    this.getData(index)
  },
  navChange(e) {
    const index =  e.detail
    if(index == this.data.curIndex) return
    this.setData({
      curIndex: index
    })
    // console.log(this.data.curIndex)
    if(!this.data.navList[index].p){
      this.firstAdd(index)
    } else {
      this.setData({
        navList: this.isSort(this.data.navList)
      })
    }
  },
  firstAdd(index) {
    wx.showLoading({
      title: '加载中...',
      icon: 'none'
    })
    this.getData(index)
  },
  getData(index) {
    let nav = this.data.navList;
    let data = nav[index].data || [];
    nav[index]['data'] = [...data, ...getExpertsMockData().data]
    nav[index]['p'] ? nav[index]['p'] ++ : nav[index]['p'] = 1
    
    nav = this.isSort(nav)
    
    setTimeout( () => {
      if(this.data.isLoading) {
        wx.showToast({
          title: '加载完成',
          icon: 'none',
          duration: 1000
        })
      }
      this.setData({
        navList: nav,
        isLoading: false
      })
      wx.hideLoading()
      console.log(this.data.navList)
    }, 1500)
    // console.log(this.data.navList)
  },
  isSort(data) {
    const index = this.data.curIndex;
    const flag = this.data.isRank
    data[index].data = data[index].data.sort( (a, b) => {
      if(flag) {
        return b.rank - a.rank
      }else {
        return b.count - a.count
      }
    })
    return data
  },
  changeRank() {
    this.setData({
      isRank: !this.data.isRank
    })
    this.setData({
      navList: this.isSort(this.data.navList)
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.firstAdd(this.data.curIndex)
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
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


function getExpertsMockData() {
  return Mock.mock({
    "data|10": [
      {
        "name|+1": ["小花", "小张", "小陈", "小赵", "牛二", "王思聪", "马云", "王健林", "小刘", "小二", "小吴", "小曹"],
        "label|+1": ["专家", "公关", "记者", "律师"],
        "sub|+1": ["某牛逼公司企业高管", "某哇塞公司高级顾问"],
        "rank|3-4.1": 4,
        "count|0-100": 100,
        "img|+1": [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599023586224&di=91a52fb6be1982151cc9a2ee76dd884a&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2016-3%2F2016033110353858909.jpg",
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=784776349,2280551942&fm=11&gp=0.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599023612536&di=9945297cd841965ab85d5feb5d0e4ba6&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Df6c3bf2ed009b3deebbfe460fcbe6cd3%2F822789014a90f603d30084013812b31bb151ed6d.jpg",
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1589977362,2470804356&fm=26&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1050219267,4018170617&fm=26&gp=0.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599023639417&di=033840b172059c149dbad222e192e70e&imgtype=0&src=http%3A%2F%2Fpic.wodingche.com%2Fcarimg%2Fgncphmndv.jpeg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3354806786,2882054674&fm=11&gp=0.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599023670119&di=a1e3cd474b7589258db8fab18a7cf2b6&imgtype=0&src=http%3A%2F%2Fimgres.9yaocn.com%2F9yaocn%2F95%2F474477-202008211431135f3f6a31ebd47.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599023677386&di=9be97800dcea1cac716fe55c7646385e&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_ls%2F0%2F9572918445_200200%2F0",
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2440685909,502131744&fm=26&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3638076892,2721253990&fm=11&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2362849222,1797549619&fm=26&gp=0.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599023978469&di=31195e8a70fd4fde988a320e95e03faf&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201108%2F12%2F1536040e90fv4m6918l040.jpg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2239115913,3565220985&fm=26&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=312985540,580896014&fm=26&gp=0.jpg"
        ]
      }
    ]
  })
}