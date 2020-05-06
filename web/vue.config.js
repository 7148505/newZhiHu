// const path: any = require("path");
// import * as path from 'path'
// const resolve = dir => {
//   return path.join(__dirname, dir)
// }

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
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: BASE_URL,
  configureWebpack: () => ({
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@assets': resolve('src/assets'),
        '@less': resolve('src/assets/less'),
        '@js': resolve('src/assets/js'),
        '@components': resolve('src/components'),
        '@filters': resolve('src/filters'),
        '@store': resolve('src/store'),
        '@views': resolve('src/views'),

        // 文件别名
        // 'services': resolve('src/services'),
      }
    },
    plugins: genPlugins(),
    // 生产环境去掉 console.log
    // https://github.com/cklwblove/vue-cli3-template/issues/12
    optimization: getOptimization()
  }),
  // 设为false打包时不生成.map文件
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true
    },
    '/api': {
      target: `http://localhost:${port}/index/api`,
      ws: true,
      changeOrigin: true
    },
  },
  productionSourceMap: false
};
