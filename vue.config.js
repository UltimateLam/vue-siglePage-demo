module.exports = {
  publicPath: './',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`
      }
    }
  }
}