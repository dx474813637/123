// pages/cf/index.js
const Mock = require('../../utils/mock-min.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex: 1,
    cfActive: 0,
    showShare: false,
    actions: ['内容专业', '容易理解', '感同身受'],
    options: [
      [
        { name: '微信', icon: 'wechat' },
        { name: '微博', icon: 'weibo' },
        { name: 'QQ', icon: 'qq' },
      ],
      [
        { name: '复制链接', icon: 'link' },
        { name: '分享海报', icon: 'poster' },
        { name: '二维码', icon: 'qrcode' },
      ],
    ],
    rwList: []
  },
  shareEvent() {
    this.setData({
      showShare: !this.data.showShare
    })
    console.log(this.data.showShare)
  },
  dudong() {
    wx.showActionSheet({
      itemList: this.data.actions,
      success: res => {
        wx.showToast({
          title: '您觉得解读的' + this.data.actions[res.tapIndex],
          icon: 'none',
          duration: 2000
        })
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
  cfChange(e) {
    console.log(e)
  },
  changeIndex(e) {
    const index = e.detail.current
    this.setData({
      curIndex: index
    })
  },
  navTap(e) {
    const index = e.target.dataset.index
    this.setData({
      curIndex: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      rwList: getRwMockData().data
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
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

function getCfMockData() {
  return Mock.mock({
    "data|10": [
      {
        "isQ|1": true,
        "name|+1": ["张三", "牛逼", "小花", "大壮", "牛二", "翠花", "小张", "小曹", "小刘", "小王", "老王", "老赵"],
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
        ],
        "label|+1": ["专家", "公关", "记者", "律师"],
        "qTitle|2-3": "这是一个采访问题标题",
        "position|+1": ["某牛逼公司企业高管", "某哇塞公司高级顾问"],
        "postDate": "@date(2020-MM-dd)",
        "postTime": "@time('H:m')"
      }
    ]
  })
}
function getRwMockData() {
  return Mock.mock({
    "data|10": [{
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
      ],
      "name|+1": ["张三", "牛逼", "小花", "大壮", "牛二", "翠花"],
      "position|+1": ["某牛逼公司企业高管", "某哇塞公司高级顾问"],
      "content|2-6": "这是一个评论"
    }]
    
  })
}