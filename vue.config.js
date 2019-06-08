const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
// 项目目录
let baseUrl = '/vshop/admin/dist/'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: isProd ? baseUrl : '/',
  productionSourceMap: false,
  lintOnSave: !isProd,

  // 开启gzip 压缩
  configureWebpack: config => {
    const plugins = []
    if (isProd) {
      plugins.push(
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css$/, // 匹配的文件名
          threshold: 8192, // 对 超过8K的数据进行压缩
          deleteOriginalAssets: false // 是否删除源文件
        })
      )
    }
    return {
      plugins
    }
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))

    // svg
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .include
      .add(resolve('src/assets/svg-icons/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'admin-[name]'
      })
      .end()

    config
    // 开发环境
      .when(process.env.NODE_ENV === 'development',
        // sourcemap不包含列信息
        config => config.devtool('cheap-source-map')
      )

    // image exclude
    const imagesRule = config.module.rule('images')
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude
      .add(resolve('src/assets/svg-icons/icons'))
      .end()

    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('utils', resolve('src/utils'))
  },

  devServer: {
    // proxy: {
    //   "/": {
    //     target: "http://192.168.29.80:8080",
    //     changeOrigin: true,
    //     ws: false,
    //     secure: false
    //   },
    // },
    port: 8080
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },

  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
}

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // 全局共享样式
        path.resolve(__dirname, './src/styles/_variables.scss'),
        path.resolve(__dirname, './src/styles/mixins.scss')
      ]
    })
}
