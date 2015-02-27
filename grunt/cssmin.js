module.exports = {
  minify: {
    files: {
      '<%= destFolder %>style.min.css': ['<%= autoprefixer.single_files.dest %>']
    }
  }
}
