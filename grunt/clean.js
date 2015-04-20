module.exports = {
  dest: ['<%= destFolder %>'],
  editorStyles: ['<%= destFolder %>editor-styles.css'],
  favicon: ['<%= pkg.srcFolders.jade %>favicons.html'],
  hashes: ['<%= destFolder %>{style.min.*.css,script.min.*.js}'],
  hashedCss: ['<%= destFolder %>style.min.*.css'],
  hashedJs: ['<%= destFolder %>script.min.*.js'],
  html: ['<%= destFolder %>*.html'],
  images: ['<%= destFolder %><%= pkg.buildFolders.img %>'],
  minSvg: ['<%= pkg.srcFolders.iconsMin %>**/*.svg'],
  unhashed: ['<%= destFolder %>{style.min.css,script.min.js}']
}
