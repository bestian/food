module.exports = {
  pwa: {
    workboxPluginMode: 'GenerateSW',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
};
