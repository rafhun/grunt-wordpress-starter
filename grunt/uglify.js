module.exports = {
  build: {
    src: '<%= concat.dist.dest %>',
    dest: '<%= destFolder %><%= pkg.buildFolders.js %>script.min.js'
  },
  nonconcat: {
    expand: true,
    cwd: '<%= pkg.srcFolders.js %>',
    src: ['*.js', '!{bower,script}.js'],
    dest: '<%= destFolder %><%= pkg.buildFolders.js %>'
  }
}
