module.exports = {
  options: {
    renameFiles: false,
    fileNameFormat: '${name}.${hash}.${ext}'
  },
  prod: {
    src: [
      '<%= destFolder %>style.min.css',
      '<%= destFolder %>script.min.js'
    ],
    dest: '<%=destFolder %>index.php'
  }
}
