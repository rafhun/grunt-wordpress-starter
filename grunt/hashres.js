module.exports = {
  options: {
    renameFiles: true,
    fileNameFormat: '${name}.${hash}.${ext}'
  },
  prod: {
    src: [
      '<%= destFolder %>style.min.css',
      '<%= destFolder %>editor-styles.css',
      '<%= destFolder %><%= config.buildFolders.js %>script.min.js',
      '<%= destFolder %><%= config.buildFolders.icons %>icons.data.svg.css',
      '<%= destFolder %><%= config.buildFolders.icons %>icons.data.png.css',
      '<%= destFolder %><%= config.buildFolders.icons %>icons.fallback.css'
    ],
    dest: [
      '<%=destFolder %>functions.php',
      '<%= destFolder %>header.php',
      '<%= config.srcFolders.config %><%= config.srcFolders.kssTemp %>/template/index.html',
      '<%= destFolder %>inc/editor.php'
    ]
  }
}
