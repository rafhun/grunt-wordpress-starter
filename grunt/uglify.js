module.exports = {
  build: {
    src: '<%= concat.dist.dest %>',
    dest: '<%= destFolder %><%= pkg.buildFolders.js %>script.min.js'
  }
}
