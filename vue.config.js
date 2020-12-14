module.exports = {
  css: { sourceMap: true },
  productionSourceMap: true,
  pwa: {
    workboxOptions: {
      exclude: ['.gitkeep','*.gitkeep', '*.map'],
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
};
