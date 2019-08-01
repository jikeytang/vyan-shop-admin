# admin
自从上次学习了[Vue-cli](https://github.com/jikeytang/vue-cli-todolist)之后，了解了一些简单的vue基础用法，但离真正的熟练还有很大的差距，本着通过实践来有效成长加深了解学习Vue的战略小目标，经过一段时间的沉淀和项目立意的准备，这个以`Element-UI`为UI组件的微信商城跃然纸上，由`Vue-5群『7561206』`管理架构，其它同学参与的名为：`微燕商城`的开源项目正式拉开了序幕，因为本着学习的目的所以这次准备微信、小程序的商城分别开发，着重熟悉微信的开发模式。经过一段时间的开发，微燕商城管理系统`0.1.0`版本告一段落，至此先总结记录一下。此版本开发目标为：通过mock数据提供一个基础模板，保证页面的完整性，整体功能比较简单，基于阶段性的成果，还是记录一下。
能力有限，不足之外还有很多，正在努力完善中，路过的大佬多多指点。

先看一下我们完成的效果 

- [vyan-shop-admin - Preivew](http://jikey.gitee.io/vyan-shop-admin/#/login)
- [vyan-shop-admin - Github](https://github.com/jikeytang/vyan-shop-admin)

目前暂时不支持移动端，`Login`视频耗流量，也没有适配。


参考自：

- [vue-element-admin](https://panjiachen.github.io/vue-element-admin/)
- [d2admin](https://d2admin.fairyever.com/)

### 1. 相关介绍

#### 1.1 基本介绍
- `微燕商城` 名字唯一为便于搜索引擎和Github搜索直达，区别于其它开源项目，同时组成整个动物系列开源项目。
- Logo 委托 [静静](http://www.jing-ui.com/) 设计，静静在界面和交互方面把关提供很多建设性意见，可以访问[她的个站](http://www.jing-ui.com/)了解更多。



#### 1.2 技术栈

技术 | 说明 | 官网
----|----|----
Vue-CLI-3 | Vue脚手架工具 | [https://cli.vuejs.org/zh/guide/](https://cli.vuejs.org/zh/guide/)
Vue | 渐进式JavaScript 框架 | [https://vuejs.org/](https://vuejs.org/)
Vue-router | 官方的路由管理器 | [https://router.vuejs.org/](https://router.vuejs.org/)
Vuex | 全局状态管理模式 | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)
Axios | 基于promise 的HTTP 库 | [https://github.com/axios/axios](https://github.com/axios/axios)
Element-UI | 前端UI组件库 *1 | [https://element.eleme.io/](https://element.eleme.cn/#/zh-CN/)
vue-echarts | `Baidu EFE`基于Echarts的图表库 *2 | [https://github.com/ecomfe/vue-echarts](https://github.com/ecomfe/vue-echarts)
Mockjs | 生成数据 | [http://mockjs.com/](http://mockjs.com/)
Momentjs | JavaScript 日期处理类库 *3 | [http://momentjs.cn/](http://momentjs.cn/)
SCSS | CSS预处理器 | [https://sass-lang.com/](https://sass-lang.com/)
Tinymce | 可视化HTML编辑器 | [https://www.tiny.cloud/](https://www.tiny.cloud/)
Fontawesome | 图标字体库 *4  | [http://www.fontawesome.com.cn/](http://www.fontawesome.com.cn/)

 1. 虽然采用Element，但整体样式风格趋向于 [ant-design](https://ant.design/index-cn)，目的就是区别于大多数admin
 2. `v-charts`为ElemeFE团队基于 `Vue2.0` 和 `ECharts` 开发的图表组件
 3. 备选 [Day.js 轻量的时间日期处理库](https://github.com/xx45/dayjs/blob/master/README.zh-CN.md)
 4. 图标并不清晰放大之后边缘模糊，下次准备使用 [IconFont](https://www.iconfont.cn)

#### 1.3 开发工具

系统 | 工具 | 官网
----|----|----
VScode | 主开发工具 | [https://code.visualstudio.com/](https://code.visualstudio.com/)
Webstorm | 开发工具(兼Git提交) | [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/)
Atom | 源码阅读工具 | [https://atom.io/](https://atom.io/)
Cmder | Cmd替代工具[windows] | [https://cmder.net/](https://cmder.net/)
Notepad2 | 临时单文件编辑[windows] | [http://www.flos-freeware.ch/notepad2.html](http://www.flos-freeware.ch/notepad2.html)
Chrome | 调试工具 | [https://www.google.com/intl/zh-CN/chrome/](https://www.google.com/intl/zh-CN/chrome/)

#### 1.4 文件结构

```javascript
├─dist           // 上线发布目录
├─public         // 公共资源目录
└─/
    ├─api           // 所有请求方法
    ├─assets        // 资源目录
    ├─components    // 全局组件
    ├─config        // 全局配置
    ├─layout        // 布局文件
    ├─mock          // mock数据
    ├─plugins       // 插件目录
    ├─router        // 路由
    ├─store         // Vuex
    ├─styles        // CSS
    ├─utils         // 公共方法目录
    └─views         // 页面
        ├─common       // 常用操作
        ├─dashboard    // 首页
        ├─login        // 登录
        ├─order        // 订单管理
        ├─other        // 其它
        ├─product      // 商品管理
        ├─system       // 系统设置
        └─user         // 用户设置
```

需要注意的点：

- `@/components`
其中使用了webpack require.context - [ [En-api]](https://webpack.js.org/guides/dependency-management/)，[[Zh-api]](https://webpack.docschina.org/guides/dependency-management/)，该方法支持三个参数，require.context(要搜索的目录，是否继续搜索其子目录，匹配文件的正则表达式)。
requireComponents导出的方法有 3 个属性：[ resolve, keys, id](https://juejin.im/post/5ab8bcdb6fb9a028b77acdbd):    

    - resolve 是一个函数，它返回请求被解析后得到的模块 id。
    - keys 也是一个函数，它返回一个数组，由所有可能被上下文模块处理的请求组成。
    - id 是上下文模块里面所包含的模块 id. 它可能在你使用 module.hot.accept 的时候被用到

```javascript
require.context('./', true, /\.vue/) // 搜索当前目录下所有子文件夹.vue结尾文件
```
但得到的并不是我们期望的数组对象，需要转换之后forEach，
```javascript
requireComponents.keys().forEach(fileName => {
  // 组件实例
  const reqCom = requireComponents(fileName)
  // 截取路径作为组件名
  const reqComName = reqCom.default.name || fileName.split('/')[1]
  // 组件挂载
  Vue.component(reqComName, reqCom.default || reqCom)
})
```
因为需要处理 `@/components/AppFilter/index.vue`这个一个文件下的单组件，也需要处理`@/components/Upload/MultiUpload.vue, @/components/Upload/SingleUpload.vue`，一个文件夹下多组件，所以组件名称为.vue文件内的name，比如AppFilter的name为AppFilter：
```javascript
export default {
  name: 'AppFilter'
}
```
如果缺少name则取文件名为组件名，此项目全部采用default.name为组件名。
**最后在总结一下**，如果不用此方法，那注入全局组件就需要这样写：
```javascript
import Vue from 'vue'
import Copyright from './Copyright/'
import ToBack from './ToBack/'
……

Vue.component('copyright', Copyright)
Vue.component('to-back', SendSms)
……
```
最主要的增加一个组件，需要手动修改这个文件，而上面的处理是避免过多手动操作的解决办法。

此方法还在store中也有用到`@/store/index.js`，读出所有modules下的文件，然后绑定modules对象最后通过store入口注入。
```javascript
const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})
```

- `@/config/app.js`：所有后期不会变化的数据
- `@/layout` 登录之后整个页面的组件放置处，比如头部导航`@/layout/pages/Navbar.vue`，左侧菜单`@/layout/pages/Sidebar.vue`，中间主区域的

    - `@/layout/pages/AppMain.vue` `router-view`占位，
    - 右边滑出的设置面板`@/layout/pages/AppSettings.vue`等等。

`@/main.js 中 render`函数已经渲染一个视图提供给el挂载，对应的路由就是根级路由，对应的视图就是`@/App.vue` 当中`router-view`，而`AppMain.vue`中对应的路由应该是`children`，视图就是`component: () => import('@/views/dashboard/index')`：
```javascript
const pre = '/index/'
export default [
  {
    path: '/',
    component: Layout,
    redirect: { name: 'dashboard' },
    children: [
      {
        path: `/dashboard`,
        name: 'dashboard',
        title: '公告板',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
]
```
- `router`
空路由的处理
```javascript
export default [
  {
    path: '/404',
    component: () => import('@/views/other/404'),
    hidden: true
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]
```

- `store` 不建议把所有的数据都放到store中来管理，无跨组件单路由数据就在当前路由处理。
- `plugins` 为vue-cli3 [vue-cli-plugin-element](https://github.com/ElementUI/vue-cli-plugin-element) 插件 `vue add element` 之后自动添加目录。
- `styles` 为了方便全局引入相关的scss变量，vuecli3也提供了相应的方法[addStyleResource()](https://cli.vuejs.org/zh/guide/css.html#%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8)，此项目中引入了：`_variables.scss, mixins.scss`方便全局内直接引用文件中的变量。
- `utils` 是所有公共方法集合，基本为业务无关方法。
- `views` 所有routes对应页面集合
- `env` [官方](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)的规定：名字`development, production`不可更改，且其中变量名以`VUE_APP_`起始。


### 2. 开发约定
除了eslint之外的约定(若第三方参数违反约定，可以单行关闭`/*eslint-disable */`)：

- 根据前面的阐述，全局组件的增加，只要`@/components`中按驼峰式命名填加，其它的文件不用修改。
- views中超过2个语义的文件夹用中划线连接，`pages`文件中单词用驼峰式，且首字母大写，文件名小写字母为路由映射文件，大写字母为组件引用文件。
- 所有组件名、css相关属性起始字母app，比如`<app-view />`就单一组件名称，`<div class="app-login"/>`为login容器，备选名称为：`vyan`。


### 3. Login页面
此页面大体结构参考：[vue-element-admin](https://panjiachen.github.io/vue-element-admin/)

`admin`其实从逻辑及视图结构上可以分为前后两部分，前部分为`Login`登录页面，所有用户登录前的信息获取都在这块处理，后部分为通过`Login`登录之后的内页面，所有业务方面的操作需要经过Login过滤才能看到，为了防止内页面数据读取错误及一般安全浏览问题，所以通过url访问内页面登录地址需要进行统一拦截处理，这个在`router/index.js`的`beforeEach`里边处理。

而Login相关的处理在：`@/views/login/index.vue`中，其中`@/views`与`@/components`中的`.vue文件`区别在于：views为路由文件(`@/router/index.js`)对应的视图页面，`components`全局共用组件，可多次复用。

- 此项目views中的组件名为pages，为区别于components，备用名有：vue，html，module等目的就是为了方便开发，没用vue的原因是可能容易让人误解，html又不符合语义，module也可以但有点偏大，最后只有pages。
- 背景视频的初衷：只是想把一些美好的东西展示在一个比较常用的入口地方，技术实现为video标签，视频存放地址为香港服务器。碰到的坑为：如果打开muted则不会自动播放，关闭之后才能自动播放，暂时没找到其它解决办法。
- 视频来源不建议用于商业环境。


### 4. Views

- 页面共用组件的抽取
因为管理系统页面风格比较单一，大多数页面的布局有很大的相似性，所以抽取一个共用组件，定义好头尾的样式，有助于样式的统一或方便后期的维护。此项目中比较典型的封装：app-view: `@/components/AppView/index.vue`，app-filter: `@/components/AppFilter/index.vue`，当中也使用的 [具名插槽的缩写](https://cn.vuejs.org/v2/guide/components-slots.html)。
- 测试页面的建立
`@/views/other/test.vue` 满足路由测试时的占位页面
- 文件夹名字采用中划线 (kebab-case)命名连接，参考[pan神](https://juejin.im/post/5c92ff94f265da6128275a85#heading-12)，由于目前这个版本并不复杂，并没有出现这样的场景。

    - 横线连接 (kebab-case) 也是官方推荐的命名规范之一 文档
    - views下的.vue文件代表的是一个路由，所以它需要和component进行区分(component 都是大写开头)
    - 页面的url 也都是横线连接的，比如https://www.xxx.admin/export-excel，所以路由对应的view应该要保持统一
    - 没有大小写敏感问题

### 5. 待开发的

- Login 关闭之后动画
主登录框右上角有个关闭按钮，关闭之后右下角会出现一个`登`，这中间并没有动画的过渡，右下角不仔细看并不容易发现，容易引起用户思考。构想：点击关闭之后，像一般购物车处理有个抛物线到右下角的效果。
- 编辑页面实现
商品列表页面编辑
- [微燕商城-weixin端 - Github](https://github.com/jikeytang/vyan-shop-weixin) 正在开发中
- [微燕商城-小程序端 - Github](https://github.com/jikeytang/vyan-shop-wxapp) 正在开发中
- [微燕商城-server端 - Github](https://github.com/jikeytang/vyan-shop-node) 正在开发中