module.exports = {
  css: { sourceMap: true },
  productionSourceMap: true,
  pwa: {
    workboxOptions: {
      exclude: [/\.map/, /\.gitkeep/, /.+\.(jpg|png)/]
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
};
