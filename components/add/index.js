// components/add/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num1: Number,
    num2: {
      type: Number,
      value: 0
    }
  },
  observers: {
    'num1, num2': function(num1, num2) {
      this.setData({
        sum: num1 + num2
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    sum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick: function() {
      var myEventDetail = {
        num1: this.properties.num1 * 2,
        num2: this.properties.num2 * 2
      }
      var myEventOption   = {}
      this.triggerEvent('addevent', myEventDetail, myEventOption )
    }
  }
})
