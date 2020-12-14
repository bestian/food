module.exports = {
  pwa: {
    workboxOptions: {
      exclude: ['*.gitkeep'],
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
};
