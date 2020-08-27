// components/comp1/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {
    name: {
      type: String,
      value: 'propDefault'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    ready() {
      console.log('ready')
    },
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log('attached')
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
      console.log('detached')
    },
  },
  pageLifetimes: {
    show: function() {
      // 页面被展示
      console.log('show')
    },
    hide: function() {
      // 页面被隐藏
      console.log('hide')
    },
    resize: function(size) {
      // 页面尺寸变化
      console.log('resize')
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handletAP() {
      console.log(this.data.name)
      console.log('comp1-tap')
    },
  }
})
