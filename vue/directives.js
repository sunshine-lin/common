/**
 * vue公共组件js
 * @authors Your Name (you@example.org)
 * @date    2017-08-08 11:03:08
 * @version $Id$
 */
import Vue from 'vue'

Vue.directive('my-directive', {
  bind: function(){
    //做绑定的准备工作
    //比如添加事件监听器，或是其他只需要执行一次的复杂操作
  },
  inserted: function(){
    //...
  },
  update: function(){
    //根据获得的新值执行对应的更新
    //对于初始值也会调用一次
  },
  componentUpdated: function(){
    //...
  },
  unbind: function(){
    //做清理操作
    //比如移除bind时绑定的事件监听器
  }
})

// 获取焦点
Vue.directive('focus', {
  bind: function (el){
    el.autofocus = true
  }
})