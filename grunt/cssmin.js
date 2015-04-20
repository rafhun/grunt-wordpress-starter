module.exports = {
  minify: {
    files: {
      '<%= destFolder %>style.min.css': ['<%= autoprefixer.main.dest %>']
    }
  }
}
