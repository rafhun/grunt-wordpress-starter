module.exports = {
  options: {
    livereload: true,
    spawn: false
  },
  jsHint: {
    files: ['<%= pkg.srcFolders.js %>script.js', '<%= pkg.srcFolders.componentsJs %>**/*.js', 'grunt/*.js', 'Gruntfile.js'],
    tasks: ['jshint']
  },
  scripts: {
    files: ['<%= pkg.srcFolders.js %>**/*.js'],
    tasks: ['clean:hashedJs', 'concat', 'uglify', 'cssmin', 'copy:index', 'hashres', 'hologram']
  },
  styles: {
    files: ['<%= pkg.srcFolders.scss %>**/*.scss'],
    tasks: ['clean:hashedCss', 'sass:main', 'autoprefixer:main', 'cssmin', 'uglify', 'copy:index', 'hashres', 'hologram']
  },
  images: {
    files: ['<%= pkg.srcFolders.images %>**/*.{png,jpg,gif}'],
    tasks: ['imagemin']
  },
  grunticon: {
    files: ['<%= pkg.srcFolders.icons %>*.svg'],
    tasks: ['svgmin', 'grunticon']
  },
  favicons: {
    files: ['<%= pkg.srcFolders.images %>favicon.png'],
    tasks: ['clean:hashes', 'clean:favicon', 'favicons', 'htmlmin', 'replace:favicon', 'copy:index', 'hashres']
  },
  php: {
    files: ['<%= pkg.srcFolders.php %>*.{php}'],
    tasks: ['clean:hashes', 'copy:php', 'hashres']
  },
  hologram: {
    files: ['<%= pkg.srcFolders.scss %>README.md'],
    tasks: ['hologram']
  }
}
