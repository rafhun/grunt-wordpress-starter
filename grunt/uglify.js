module.exports = {
  build: {
    src: '<%= concat.dist.dest %>',
    dest: '<%= destFolder %><%= config.buildFolders.js %>script.min.js'
  },
  nonconcat: {
    expand: true,
    cwd: '<%= config.srcFolders.js %>',
    src: ['*.js', '!{bower,script}.js'],
    dest: '<%= destFolder %><%= config.buildFolders.js %>'
  }
}
