module.exports = {
  pwa: {
    workboxOptions: {
      exclude: ['.gitkeep','*.gitkeep', '*.map'],
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
};
