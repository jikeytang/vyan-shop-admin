import Vue from 'vue'

const requireComponents = require.context('./', true, /\.vue/)

requireComponents.keys().forEach(fileName => {
  // 组件实例
  const reqCom = requireComponents(fileName)
  // 截取路径作为组件名
  const reqComName = reqCom.default.name || fileName.split('/')[1]
  // 组件挂载
  Vue.component(reqComName, reqCom.default || reqCom)
})
