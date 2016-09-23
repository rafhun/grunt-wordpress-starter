module.exports = {
  dest: ["<%= destFolder %>"],
  editorStyles: ["<%= destFolder %>editor-styles.css"],
  favicon: ["<%= config.srcFolders.jade %>favicons.html"],
  hashes: ["<%= destFolder %>{style.min.*.css,<%= config.buildFolders.js %>script.min.*.js}"],
  hashedCss: ["<%= destFolder %>style.min.*.css"],
  hashedIcons: ["<%= destFolder %><%= config.buildFolders.icons %>icons.*.css"],
  hashedJs: ["<%= destFolder %><%= config.buildFolders.js %>script.min.*.js"],
  html: ["<%= destFolder %>*.html"],
  images: ["<%= destFolder %><%= config.buildFolders.img %>"],
  minSvg: ["<%= config.srcFolders.iconsMin %>*.svg"],
  nucleus: ["<%= config.srcFolders.config %>.nucleus/"],
  unhashed: ["<%= destFolder %>{style.min.css,script.min.js}"],
};
