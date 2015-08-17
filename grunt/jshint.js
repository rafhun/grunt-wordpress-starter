module.exports = {
  options: {
    jshintrc: true,
  },
  grunt: ['Gruntfile.js', 'grunt/*.js'],
  src: [
    '<%= config.srcFolders.jsMolecules %>**',
    '<%= config.srcFolders.js %>script.js'
  ],
  shipping: {
    options: {
      jshintrc: '.jshintrc-dist',
    },
    files: {
      src: [
        '<%= config.srcFolders.jsMolecules %>**',
        '<%= config.srcFolders.js %>script.js',
      ],
    }
  }
}
