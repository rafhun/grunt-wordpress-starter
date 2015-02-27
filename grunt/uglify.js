module.exports = {
  build: {
    src: '<%= concat.dist.dest %>',
    dest: '<%= destFolder %>script.min.js'
  }
}
