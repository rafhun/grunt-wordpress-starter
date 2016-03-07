module.exports = {
  options: {
    sourceMap: true,
    keepSpecialComments: 0,
    roundingPrecision: -1
  },
  minify: {
    files: {
      '<%= destFolder %>style.min.css': ['<%= postcss.main.dest %>']
    }
  }
}
