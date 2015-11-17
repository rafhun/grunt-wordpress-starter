module.exports = {
  options: {
    renameFiles: true,
    fileNameFormat: '${name}.${hash}.${ext}'
  },
  prod: {
    src: [
      '<%= destFolder %>style.min.css',
      '<%= destFolder %><%= config.buildFolders.js %>script.min.js'
    ],
    dest: '<%=destFolder %>functions.php'
  }
}
