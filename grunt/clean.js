module.exports = {
  hashes: ['<%= destFolder %>{style.min.*.css,script.min.*.js}'],
  html: ['<%= destFolder %>*.html'],
  images: ['<%= destFolder %><%= pkg.buildFolders.img %>'],
  dest: ['<%= destFolder %>'],
  unhashed: ['<%= destFolder %>{style.min.css,script.min.js}'],
  contrexx: ['wwwroot/images/**/*.{jpg,jpeg,gif,png,thumb,pdf,ico,db,html}', 'wwwroot/themes/skeleton_3_0']
}
