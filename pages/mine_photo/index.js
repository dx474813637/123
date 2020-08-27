// pages/mine_photo/index.js
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		list: [
			{
				year: 2020,
				month: 7,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
			{
				year: 2020,
				month: 6,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
			{
				year: 2020,
				month: 5,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
			{
				year: 2020,
				month: 4,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
			{
				year: 2020,
				month: 3,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
			{
				year: 2020,
				month: 2,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
			{
				year: 2020,
				month: 1,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
			{
				year: 2019,
				month: 12,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
			{
				year: 2019,
				month: 11,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
			{
				year: 2019,
				month: 10,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
			{
				year: 2019,
				month: 9,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
			{
				year: 2019,
				month: 8,
				pList: "https://img.yzcdn.cn/vant/cat.jpeg",
			},
		],
		pList: [],
		curYear: new Date().getFullYear(),
	},
	renderpList() {
		let arr = [];
		for (let i = 0; i < this.data.list.length; i++) {
			// console.log(this.data.pList, Math.floor(Math.random()*9) + 1)
      arr.push(Math.floor(Math.random() * 8) + 1);
      // console.log(arr)
		}
		this.setData({
			pList: arr,
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.renderpList();
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {},
});
