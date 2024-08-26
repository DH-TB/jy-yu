const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {

  chainWebpack: config => {

    if (process.env.use_analyzer) {     // 分析

      config.plugin("BundleAnalyzerPlugin").use(BundleAnalyzerPlugin)

    }

  },

  pluginOptions: {}

}
