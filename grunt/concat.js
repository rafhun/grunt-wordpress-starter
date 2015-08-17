module.exports = {
  dist: {
    src: [
      '<%= bower_concat.all.dest %>',
      '<%= config.srcFolders.js %>plugins.js',
      '<%= config.srcFolders.jsMolecules %>**/*.js',
      '<%= config.srcFolders.js %>script.js'
    ],
    dest: '<%= destFolder %><%= config.buildFolders.js %>script.js'
  }
}
