module.exports = {
  options: {
    jshintrc: true,
  },
  grunt: ['Gruntfile.js', 'grunt/*.js'],
  src: [
    '<%= pkg.srcFolders.componentsJs %>**',
    '<%= pkg.srcFolders.js %>script.js'
  ],
  shipping: {
    options: {
      jshintrc: '.jshintrc-dist',
    },
    files: {
      src: [
        '<%= pkg.srcFolders.componentsJs %>**',
        '<%= pkg.srcFolders.js %>script.js',
      ],
    }
  }
}
