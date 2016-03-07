module.exports = {
  options: {
    separator: ';\n'
  },
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
