// pages/index/index.js
const http = require("../../utils/http.js")
const Mock = require('../../utils/mock-min.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex: 0,
    navList: [
      {
        name: '今日推荐',
        type: '',
        id: 'jrtt'
      },
      {
        name: '零售电商',
        type: '',
        id: 'lsds'
      },
      {
        name: 'AI·智能',
        type: '',
        id: 'ai'
      },
      {
        name: '金融科技',
        type: '',
        id: 'jrkj'
      },
      {
        name: '产业电商',
        type: '',
        id: 'cyds'
      },
      {
        name: '进口跨境',
        type: '',
        id: 'jkkj'
      },
    ],
    refresh: false,
    bottomFlag: false,
  },
  scrollBottomEvent(e) {   
    // console.log(e)
    const index = e.currentTarget.dataset.index
    if(this.data.bottomFlag || this.data.navList[index].refresh) return false 
    this.setData({
      bottomFlag: true
    })
    this.getData(index)
  },
  refresherrefresh(e) {
    // console.log(e)
    const index = e.currentTarget.dataset.index

    wx.showLoading({
      title: 'loading',
      icon: 'none'
    })
    this.getData(index)
  },
  swiperChange(e) {
    const index = e.detail.current
    this.setData({
      curIndex: index
    })
  },
  swiperanimationEnd(e) {
    const index = e.detail.current
    if(!this.data.navList[index].curP) {
      this.datainit(index)
    } 
  },
  datainit(index) {
    this.setData({
      [`navList[${index}].refresh`]: true
    })
  },
  navChange(e) {
    this.setData({
      curIndex: e.currentTarget.dataset.index
    })
  },
  getData(index) {
    const data = getMockData()
    let nav = this.data.navList
    let arr = nav[index]['data'] || []
    let p = arr.length == 0 ? 1 : nav[index].curP ++
    setTimeout( () => {
      nav[index]['curP'] = p
      nav[index]['refresh'] = false
      nav[index]['data'] = [...arr, ...data.data]
      wx.hideLoading()
      this.setData({
        navList: nav,
        bottomFlag: false
      })
    }, 2000)

    // console.log(this.data.navList)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(getMockData())
    this.datainit(0)
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
        selected: 0
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
function getMockData() {
  return Mock.mock({
    "data|5": [
      {
        "bannerUrl|+1": [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599018471391&di=7151751e453768ac0c2735264545f1c6&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171016%2Fc9dfff1de5e04a2bb669d231abecff65.jpeg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2749784244,3879252078&fm=15&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3623405000,3892717633&fm=26&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1717796854,32003929&fm=26&gp=0.jpg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2207492360,100393356&fm=15&gp=0.jpg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2709016598,2507357986&fm=26&gp=0.jpg"
        ],
        "title|3-8": "这是一个标题",
        "author|+1": [ "某头条", "某界面", "某某财经", "某百家", "某微信", "某公司"],
        "date": '@date(2020年MM月dd日)',
        "expertInfo": {
          "name|+1": ["张三", "牛逼", "小花", "大壮", "牛二", "翠花"],
          "label|+1": ["专家", "公关", "记者", "律师"],
          "position|+1": ["某牛逼公司企业高管", "某哇塞公司高级顾问"],
          "content": "等哈说看见的，贺卡是打开加号的空间哈斯，就肯定会阿卡较好的跨境，阿红的空间阿红就肯跨境阿红的空间，阿红就肯跨境阿红的空间阿红就肯定会阿卡家说得好爱将可获得金卡好的尽快哈看得见会卡机是"
        },
        "expertNum|5-100": 100,
        "expertsList|5": [
          {
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
      }
    ]
  })
}