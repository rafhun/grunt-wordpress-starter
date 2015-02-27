module.exports = {
  options: {
    livereload: true,
  },
  jsHint: {
    files: ['<%= pkg.srcFolders.js %>main.js', 'grunt/*.js', 'Gruntfile.js'],
    tasks: ['jshint'],
    options: {
      spawn: false,
    }
  },
  scripts: {
    files: ['<%= pkg.srcFolders.js %>**/*.js'],
    tasks: ['clean:hashes', 'concat', 'uglify', 'hashres'],
    options: {
      spawn: false,
    }
  },
  styles: {
    files: ['<%= pkg.srcFolders.scss %>**/*.scss'],
    tasks: ['clean:hashes', 'sass', 'autoprefixer', 'cssmin', 'hashres', 'hologram'],
    options: {
      spawn: false,
    }
  },
  images: {
    files: ['<%= pkg.srcFolders.images %>**/*.{png,jpg,gif}'],
    tasks: ['imagemin'],
    options: {
      spawn: false,
    }
  },
  svg: {
    files: ['<%= pkg.srcFolders.svg %>*.svg'],
    tasks: ['svgstore', 'jade', 'hashres'],
    options: {
      spawn: false,
    }
  },
  favicons: {
    files: ['<%= pkg.srcFolders.images %>favicon.png'],
    tasks: ['clean:hashes','favicons', 'htmlmin', 'jade', 'hashres'],
    options: {
      spawn: false,
    }
  },
  jade: {
    files: ['<%= pkg.srcFolders.jade %>*.{jade,html}'],
    tasks: ['clean:hashes', 'jade', 'hashres'],
    options: {
      spawn: false,
    }
  },
  hologram: {
    files: ['<%= pkg.srcFolders.scss %>README.md'],
    tasks: ['hologram'],
    options: {
      spawn: false,
    }
  }
}
