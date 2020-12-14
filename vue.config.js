module.exports = {
  pwa: {
    workboxOptions: {
      exclude: ['*.gitkeep', '*.map'],
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
};
