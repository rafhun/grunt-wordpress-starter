module.exports = {
  options: {
    renameFiles: true,
    fileNameFormat: '${name}.${hash}.${ext}'
  },
  prod: {
    src: [
      '<%= destFolder %>style.min.css',
      '<%= destFolder %>script.min.js'
    ],
    dest: '<%=destFolder %>functions.php'
  }
}
