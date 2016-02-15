module.exports = {
  all: {
    dest: {
      js: '<%= config.srcFolders.js %>bower.js',
    },
    exclude: [
      'susy',
      'normalize-scss'
    ],
  }
}
