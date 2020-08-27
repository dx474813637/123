// pages/demo05/demo05.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iname: '',
    isex: [
      {value: '0', name: '男', checked: true},
      {value: '1', name: '女'},
    ],
    ilike: [
      {value: 'ls', name: '零售', checked: true },
      {value: 'sh', name: '生活' },
      {value: 'cy', name: '产业' },
      {value: 'kj', name: '跨境' },
      {value: 'wl', name: '物流' },
      {value: 'jr', name: '金融' },
      {value: 'fl', name: '法律' },
    ],
    itime: '12:00',
    idate: '2020-01-01',
    selectorArr: [
      {id: 0, name: '专家'},
      {id: 1, name: '记者'},
      {id: 2, name: '律师'}
    ],
    index: 0,
    indexArr: [0,0,0],
    multiSelectorArr: [
      [
        {id:0, name: 'itema-a'},
        {id:1, name: 'itema-b'},
        {id:2, name: 'itema-c'}
      ],
      [
        {id:0, name: 'itemb-a'},
        {id:1, name: 'itemb-b'},
        {id:2, name: 'itemb-c'}
      ],
      [
        {id:0, name: 'itemc-a'},
        {id:1, name: 'itemc-b'},
        {id:2, name: 'itemc-c'}
      ]
    ],
    area: [],
    
  },
  inputName(e) {
    this.setData({
      iname: e.detail.value
    })
  },
  areaChange(e) {
    console.log(e)
    this.setData({
      area: e.detail.value
    })
  },
  multiSelectorChange(e) {
    console.log(e)
    this.setData({
      indexArr: e.detail.value
    })
  },
  selectorChange(e) {
    console.log(e)
    this.setData({
      index: e.detail.value
    })
  },
  timeChange(e) {
    // console.log(e)
    this.setData({
      itime: e.detail.value
    })
  },
  dateChange(e) {
    // console.log(e)
    this.setData({
      idate: e.detail.value
    })
  },
  /**
   * 多选框改变事件监听
   */
  checkedChange(e) {
    // console.log(e)
    let curArr = e.detail.value;
    let arr = this.data.ilike;
    arr.forEach(ele => {
      if(curArr.indexOf(ele.value) !== -1) {
        ele.checked = true
      }else {
        ele.checked = false
      }
    })
    this.setData({
      ilike: arr
    })


  },
  /**
   * 单选框改变事件监听 */
  radioChange(e) {
    let cur = e.detail.value
    let arr = this.data.isex;
    arr.forEach(ele => {
      if(ele.value == cur) {
        ele.checked = true
      }else {
        ele.checked = false
      }
    })
    this.setData({
      isex: arr
    })
  },
  /**
   * 表单提交事件监听
   * @param {*} e 
   */
  handleSubmit(e) {
    // console.log(this.data)
    let sex = this.data.isex.filter(ele => ele.checked)[0].value
    let like = this.data.ilike.map(ele => {
      return ele.name
    })
    let obj = {
      name: this.data.iname,
      sex: sex,
      like: like,
      time: this.data.itime,
      date: this.data.idate,
      position: this.data.selectorArr[this.data.index].name,
      mul: [this.data.multiSelectorArr[0][this.data.indexArr[0]].name, this.data.multiSelectorArr[1][this.data.indexArr[1]].name, this.data.multiSelectorArr[2][this.data.indexArr[2]].name ],
      area: [this.data.area[0], this.data.area[1], this.data.area[2]]
    }
    console.log(obj)
  },
  cc () {
    this.eventChannel.emit('getMsg', {data: {name: 'dx', itime: this.data.itime}})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.eventChannel = this.getOpenerEventChannel();
    this.eventChannel.on('getMsg', res => {
      console.log(res)
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