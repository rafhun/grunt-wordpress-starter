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
    tasks: ['clean:hashedJs', 'concat', 'uglify', 'cssmin', 'copy:index', 'hashres', 'kss']
  },
  styles: {
    files: ['<%= config.srcFolders.scss %>**/*.scss'],
    tasks: ['clean:hashedCss', 'sass:main', 'autoprefixer:main', 'cssmin', 'uglify', 'copy:index', 'hashres', 'kss']
  },
  images: {
    files: ['<%= config.srcFolders.images %>**/*.{png,jpg,gif,svg}'],
    tasks: ['imagemin:imagesTheme']
  },
  grunticon: {
    files: ['<%= config.srcFolders.icons %>*.svg'],
    tasks: ['svgmin', 'grunticon']
  },
  favicons: {
    files: ['<%= config.srcFolders.images %>favicon.png'],
    tasks: ['clean:hashes', 'clean:favicon', 'favicons', 'htmlmin', 'replace:favicon', 'copy:index', 'hashres']
  },
  languages: {
    files: ['<%= config.srcFolders.languages %>*.po'],
    tasks: ['translations']
  },
  php: {
    files: ['<%= config.srcFolders.php %>**/*.php'],
    tasks: ['clean:hashes', 'copy:php', 'cssmin', 'uglify', 'hashres']
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
