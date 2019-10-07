// pages/component/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    // 组件的生命周期函数，用于声明组件的生命周期
    attached: () => {
      console.log('attached')
    },
    moved: () => { 
      console.log('moved')
    },
    detached: () => {
      console.log('detached')
     }
  },
  pageLifetimes: {
    // 组件所在页面的生命周期函数
    show: () => {
      console.log('show')
     },
    hide: () => { 
      console.log('hide')
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
