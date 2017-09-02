/**
 * vue全局配置
 */
import Vue from 'vue'

// 取消 Vue 所有的日志与警告
Vue.config.silent = true

// 允许 vue-devtools 检查代码。开发版本默认为 true，生产版本默认为 false
Vue.config.devtools = true

// 给v-on自定义键位别名
Vue.config.keyCodes = {
  // v: 86,
  // f1: 112,
  // // camelCase 不可用
  // mediaPlayPause: 179,
  // // 取而代之的是 kebab-case 且用双引号括起来
  // "media-play-pause": 179,
  // up: [38, 87]
}

// 设置为 true 以在浏览器开发工具中启用对组件初始化，渲染和打补丁的性能追踪。只适用于开发模式和支持 performance.mark API的浏览器上。
Vue.config.performance = false

// 来关闭生产模式下给出的提示
Vue.config.productionTip = false
