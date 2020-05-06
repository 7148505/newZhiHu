// const path: any = require("path");
// import {path} from 'path'
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "/";
const port = 3000;
module.exports = {
  outputDir: 'dist', // 打包生成的生产环境构建文件的目录
  assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,
  // chainWebpack: () => ({
  // resolve: {
  //   alias: {
  //     '@': resolve('src'),
  //     // '@assets': resolve('src/assets'),
  //     // '@less': resolve('src/assets/less'),
  //     // '@js': resolve('src/assets/js'),
  //     // '@components': resolve('src/components'),
  //     // '@filters': resolve('src/filters'),
  //     // '@store': resolve('src/store'),
  //     // '@views': resolve('src/views'),

  //     // 文件别名
  //     // 'services': resolve('src/services'),
  //   }
  // },
  // // plugins: genPlugins(),
  // // 生产环境去掉 console.log
  // // https://github.com/cklwblove/vue-cli3-template/issues/12
  // // optimization: getOptimization()
  // }),
  // 设为false打包时不生成.map文件
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   // open: process.platform === 'darwin',
  //   '/api': {
  //     target: `http://localhost:${port}/index/api`,
  //     changeOrigin: true
  //   },
  // },
  // css: {
  //   modules: false, // 启用 CSS modules
  //   extract: true, // 是否使用css分离插件
  //   sourceMap: false, // 开启 CSS source maps?
  //   loaderOptions: {} // css预设器配置项
  // },
  devServer: {
    // port: 8080, // 端口
    // proxy: 'https://www.easy-mock.com' // 设置代理
  }
};
