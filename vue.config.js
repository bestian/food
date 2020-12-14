module.exports = {
  css: { sourceMap: true },
  productionSourceMap: true,
  pwa: {
    workboxOptions: {
      exclude: ['.gitkeep','*.gitkeep', '*.map', '*.jpg', '*.png']
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
};
