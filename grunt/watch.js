module.exports = {
  options: {
    livereload: true,
    spawn: false
  },
  jsHint: {
    files: ['<%= config.srcFolders.js %>script.js', '<%= config.srcFolders.jsMolecules %>**/*.js', 'grunt/*.js', 'Gruntfile.js'],
    tasks: ['jshint:grunt', 'jshint:src']
  },
  scripts: {
    files: ['<%= config.srcFolders.js %>**/*.js'],
    tasks: ['clean:hashedJs', 'concat', 'uglify', 'cssmin', 'copy:functions', 'hashres', 'kss']
  },
  styles: {
    files: ['<%= config.srcFolders.scss %>**/*.scss'],
    tasks: ['clean:hashedCss', 'sass:main', 'autoprefixer:main', 'cssmin', 'uglify', 'copy:functions', 'hashres', 'kss']
  },
  images: {
    files: ['<%= config.srcFolders.images %>**/*.{png,jpg,gif,svg}'],
    tasks: ['imagemin:imagesTheme']
  },
  grunticon: {
    files: ['<%= config.srcFolders.icons %>*.svg'],
    tasks: ['clean:hashedIcons', 'svgmin', 'grunticon', 'copy:header', 'copy:icons', 'hashres', 'kss']
  },
  languages: {
    files: ['<%= config.srcFolders.languages %>*.po'],
    tasks: ['translations']
  },
  php: {
    files: ['<%= config.srcFolders.php %>**/*.php'],
    tasks: ['clean:hashes', 'copy:php', 'cssmin', 'uglify', 'hashres', 'kss']
  },
  kss: {
    files: ['<%= config.srcFolders.scss %>readme.md','<%= config.srcFolders.scss %>**/*.{html,hbs}', '<%= config.srcFolders.config %>kss/template/**'],
    tasks: ['kss']
  },
  composer: {
    files: ['composer.json', 'composer.lock'],
    tasks: ['shell:updatePlugins']
  },
  htaccess: {
    files: ['<%= config.srcFolders.config %>.htaccess'],
    tasks: ['copy:htaccess']
  }
}
