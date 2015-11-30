module.exports = {
  dest: ['<%= destFolder %>'],
  editorStyles: ['<%= destFolder %>editor-styles.css'],
  favicon: ['<%= config.srcFolders.jade %>favicons.html'],
  hashes: ['<%= destFolder %>{style.min.*.css,script.min.*.js}'],
  hashedCss: ['<%= destFolder %>style.min.*.css'],
  hashedJs: ['<%= destFolder %>script.min.*.js'],
  html: ['<%= destFolder %>*.html'],
  images: ['<%= destFolder %><%= config.buildFolders.img %>'],
  minSvg: ['<%= config.srcFolders.iconsMin %>*.svg'],
  unhashed: ['<%= destFolder %>{style.min.css,script.min.js}'],
}
