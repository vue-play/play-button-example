const pkg = require('./package')

module.exports = {
  entry: {
    app: 'play/app.js',
    preview: [':hot:', 'play/preview.js']
  },
  dist: 'play/dist',
  port: 5000,
  // compile Vue template
  templateCompiler: true,
  // no code split for 3rd party libraries
  vendor: false,
  html: [{
    chunks: ['app'],
    filename: 'index.html',
    title: pkg.name
  }, {
    chunks: ['preview'],
    filename: 'preview.html'
  }],
  // For deployment only, resources are fetched from this path instead of root
  homepage: '/play-button-example/'
}
