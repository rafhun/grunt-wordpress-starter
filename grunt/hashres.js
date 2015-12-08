module.exports = {
  options: {
    renameFiles: true,
    fileNameFormat: '${name}.${hash}.${ext}'
  },
  prod: {
    src: [
      '<%= destFolder %>style.min.css',
      '<%= destFolder %><%= config.buildFolders.js %>script.min.js',
      '<%= destFolder %><%= config.buildFolders.icons %>*.css'
    ],
    dest: ['<%=destFolder %>functions.php', '<%= destFolder %>header.php', '<%= config.srcFolders.config %>kss/template/index.html']
  }
}
