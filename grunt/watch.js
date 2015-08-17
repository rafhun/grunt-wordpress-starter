module.exports = {
  options: {
    livereload: true,
    spawn: false
  },
  jsHint: {
    files: ['<%= config.srcFolders.js %>script.js', '<%= config.srcFolders.jsMolecules %>**/*.js', 'grunt/*.js', 'Gruntfile.js'],
    tasks: ['jshint']
  },
  scripts: {
    files: ['<%= config.srcFolders.js %>**/*.js'],
    tasks: ['clean:hashedJs', 'concat', 'uglify', 'cssmin', 'copy:index', 'hashres', 'sassdown']
  },
  styles: {
    files: ['<%= config.srcFolders.scss %>**/*.scss'],
    tasks: ['clean:hashedCss', 'sass:main', 'autoprefixer:main', 'cssmin', 'uglify', 'copy:index', 'hashres', 'sassdown']
  },
  images: {
    files: ['<%= config.srcFolders.images %>**/*.{png,jpg,gif}'],
    tasks: ['imagemin']
  },
  grunticon: {
    files: ['<%= config.srcFolders.icons %>*.svg'],
    tasks: ['svgmin', 'grunticon']
  },
  favicons: {
    files: ['<%= config.srcFolders.images %>favicon.png'],
    tasks: ['clean:hashes', 'clean:favicon', 'favicons', 'htmlmin', 'replace:favicon', 'copy:index', 'hashres']
  },
  php: {
    files: ['<%= config.srcFolders.php %>**/*.php'],
    tasks: ['clean:hashes', 'copy:php', 'hashres']
  },
  sassdown: {
    files: ['<%= config.srcFolders.scss %>README.md'],
    tasks: ['sassdown']
  }
}
