//app.js

const http = require("./utils/http.js");

App({
	onLaunch: function () {
		// 展示本地存储能力
		var logs = wx.getStorageSync("logs") || [];
		logs.unshift(Date.now());
		wx.setStorageSync("logs", logs);

		// function dx(){
		// 	return new Promise((resolve, reject)=>{
		// 		let sino = parseInt(Math.random() * 6 +1)
		// 		setTimeout(()=>{
		// 			resolve(sino)
		// 		},3000)
		// 	})
		// }
		// async function test(){
		// 	let n =await dx()
		// 	console.log(n)
		// }
		// test()
		// const p1 = http.http('https://www.100ec.cn/Index/global_json.html', 'GET', {cate: '中国'})
		// const p2 = http.http('https://www.100ec.cn/Index/global_json.html', 'GET', {cate: '美国'})

		// async function test () {
		// 	// let n1 = await p1
		// 	// let n2 = await p2
		// 	// console.log(n1, n2)

		// 	let n = await Promise.all([p1, p2])
		// 	console.log(n)
		// }
		// test()

		// Promise.all([p1, p2]).then(res => {
		// 	console.log(res)
		// })
		// p1.then((res) => {
		// 	console.log(res)
		// 	return p2
		// })
		// .then((res) => {
		// 	console.log(res)
		// })

		// const requestTask = wx.request({
		// 	url: "https://www.100ec.cn/Index/global_json.html",
		// 	data: {
		// 		cate: "中国",
		// 	},
		// 	success: function (res) {
		// 		console.log(res);
		// 	},
		// });
		// requestTask.abort()

		// console.log(1)
		// 登录
		wx.login({
			success: (res) => {
				// console.log(res)
				wx.request({
					url: "https://api.weixin.qq.com/sns/jscode2session",
					data: {
						appid: "wx912fd34606210493",
						secret: "06a9c94ffbfe7b2da1a2442aa91303d5",
						js_code: res.code,
						grant_type: "authorization_code",
					},
					success: function (re) {
						// console.log(re)
					},
				});
				// 发送 res.code 到后台换取 openId, sessionKey, unionId
			},
		});
		// 获取用户信息
		wx.getSetting({
			success: (res) => {
				console.log(res);
				if (res.authSetting["scope.userInfo"]) {
					// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
					wx.getUserInfo({
						success: (res) => {
							// 可以将 res 发送给后台解码出 unionId
							this.globalData.userInfo = res.userInfo;

							// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
							// 所以此处加入 callback 以防止这种情况
							if (this.userInfoReadyCallback) {
								this.userInfoReadyCallback(res);
							}
						},
					});
				}
				if (!res.authSetting["scope.record"]) {
					wx.authorize({
						scope: "scope.record",
						success() {
							// 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
							wx.startRecord();
						},
					});
				}
				if (!res.authSetting["scope.userLocation"]) {
					wx.authorize({
						scope: "scope.userLocation",
						success() {
							// 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
							wx.getLocation({
								type: "wgs84",
								success(ss) {
									console.log(ss);
								},
							});
						},
					});
				}
				if (!res.authSetting["scope.address"]) {
					wx.authorize({
						scope: "scope.address",
						success() {
							// 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
							wx.chooseAddress({
								success(ss) {
									console.log(ss);
								},
							});
						},
					});
				}
				if (!res.authSetting["scope.werun"]) {
					wx.authorize({
						scope: "scope.werun",
						success() {
							// 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
							wx.getWeRunData({
								success(res) {
									// 拿 encryptedData 到开发者后台解密开放数据
									const encryptedData = res.encryptedData;
									// 或拿 cloudID 通过云调用直接获取开放数据
									const cloudID = res.cloudID;
								},
							});
						},
					});
				}
			},
		});
	},
	globalData: {
		userInfo: null,
	},

	setWatcher(data, obj) {
		Object.keys(obj).forEach((ele) => {
			this.observe(data, ele, obj[ele]);
		});
	},
	observe(data, key, fn) {
		var val = data[key];
		var oldV;
		Object.defineProperty(data, key, {
			configurable: true,
			enumerable: true,
			get() {
				return val;
			},
			set(newVal) {
				if (newVal !== val) {
					oldV = val;
					val = newVal;
					fn(newVal, oldV);
				}
			},
		});
	},
});
