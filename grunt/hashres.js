module.exports = {
  options: {
    renameFiles: true,
    fileNameFormat: "${name}.${hash}.${ext}",
  },
  prod: {
    src: [
      "<%= destFolder %>style.min.css",
      "<%= destFolder %>editor-styles.css",
      "<%= destFolder %><%= config.buildFolders.js %>*.min.js",
      "<%= destFolder %><%= config.buildFolders.icons %>icons.data.svg.css",
      "<%= destFolder %><%= config.buildFolders.icons %>icons.data.png.css",
      "<%= destFolder %><%= config.buildFolders.icons %>icons.fallback.css",
    ],
    dest: [
      "<%=destFolder %>functions.php",
      "<%= destFolder %>header.php",
      "<%= config.srcFolders.config %>.nucleus/common/layout.pug",
      "<%= destFolder %>inc/editor.php",
    ],
  },
};
