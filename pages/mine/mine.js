// pages/mine/mine.js
const app = getApp();

const http = require("../../utils/http.js");
// console.log(http)
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		name: "dx",
		num: 0,
		num2: 0,
		test: 1,
		hasUserInfo: false,
		userInfo: {},
	},
	getInfo() {
		const self = this;
		console.log(app.globalData.userInfo);
		// if (app.globalData.userInfo) {
		// 	this.setData({
		// 		userInfo: app.globalData.userInfo,
		// 		hasUserInfo: true,
		// 	});
		// } else {
		// 	app.userInfoReadyCallback = (res) => {
		// 		console.log(res)
		// 		this.setData({
		// 			userInfo: res.userInfo,
		// 			hasUserInfo: true,
		// 		});
		// 	};
		// 	// 在没有 open-type=getUserInfo 版本的兼容处理
		wx.getUserInfo({
			success: (res) => {
				console.log(res);
				app.globalData.userInfo = res.userInfo;
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true,
				});
			},
			fail: (res) => {
				console.log(res);
				self.openSetting();
			},
		});
		// }
	},
	getInfo2(e) {
		console.log(e);
	},
	getPhoneNumber(e) {
		console.log(e.detail.errMsg);
		console.log(e.detail.iv);
		console.log(e.detail.encryptedData);
	},
	openSetting() {
		wx.openSetting();
	},
	handleTap() {
		// console.log('x')
		wx.navigateTo({
			url: "/pages/mine_info/index",
		});
	},
	handleTapdx(options) {
		console.log("handleTapdx");
	},
	handleTap2(options) {
		console.log(options);
	},
	handletapp() {
		const compChild = this.selectComponent(".demo");
		console.log(compChild);
	},
	handleCount1(e) {
		// console.log(e)
		// const comp = this.selectComponent('#' + e.target.id)
		this.setData({
			num: e.detail.num + 2,
		});
		// console.log(comp)
	},
	handleCount2(e) {
		// console.log(e)
		// const comp = this.selectComponent('#' + e.target.id)
		this.setData({
			num2: e.detail.num + 1,
		});
		// console.log(this.data.num)
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		getApp().setWatcher(this.data, this.watch);
		// http.http('https://www.100ec.cn/Index/global_json.html', 'GET', {cate: '中国'})
		// 	.then((res) => {
		// 		console.log(res)
		// 		return http.http('https://www.100ec.cn/Index/global_json.html', 'GET', {cate: '美国'})
		// 	})
		// 	.then((res) => {
		// 		console.log(res)
		// 	})
		// this.setData({
		//   test: 'demo'
		// })
		// this.setData({
		//   test: 'demo2'
		// })
		// console.log(this)
		// console.log(this.data.name, 'onLoad')
	},
	watch: {
		test: function (newVal, oldVal) {
			console.log(newVal, oldVal);
		},
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {
		// console.log(this.data.name, 'onReady')
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {
		// console.log(this.data.name, 'onShow')
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {
		// console.log(this.data.name, 'onHide')
	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {
		// console.log(this.data.name, 'onUnload')
	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
		// console.log(this.data.name, 'onPullDownRefresh')
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		// console.log(this.data.name, 'onReachBottom')
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {
		// console.log(this.data.name, 'onShareAppMessage')
	},
});
