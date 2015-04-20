module.exports = {
  stylesBanner: {
    options: {
      position: 'top',
      banner: '<%= banner %>',
      linebreak: true
    },
    files: {
      src: ['<%= destFolder %>style.css']
    }
  }
}
