// components/comp2/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name: String
  },
  /**
   * 组件的初始数据
   */
  data: {
    nameDemo: 'comp2'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    xx () {
      console.log(this.data.name)
      // this.triggerEvent('myevent', {userName: 'dx'}, {})
      // this.triggerEvent('myevent', {userName: 'dx'}, {bubbles:true})
      // this.triggerEvent('myevent', {userName: 'dx'}, {bubbles:true, composed:true})
    },
  }
})
