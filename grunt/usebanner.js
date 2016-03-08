module.exports = {
  stylesBanner: {
    options: {
      position: 'top',
      replace: true,
      banner: '<%= banner %>',
      linebreak: true
    },
    files: {
      src: ['<%= destFolder %>style.css']
    }
  }
}
