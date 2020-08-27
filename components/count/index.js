// components/count/index.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		num: {
			type: Number,
			value: 0,
		},
		addNum: {
			type: Number,
			value: 1,
		},
	},
	observers: {
	  'num': function(num) {
		console.log('我变了')
	  }
	},

	/**
	 * 组件的初始数据
	 */
	data: {},

	/**
	 * 组件的方法列表
	 */
	methods: {
		handleCount() {
			// this.setData({
			// 	num: this.data.num + 1,
			// });
			this.triggerEvent("myeventdx", {num: this.data.num}, {});
		},
	},
});
