module.exports = {
  local: {
    options: {
      patterns: [
        {
          json: '<%= secrets.local %>'
        },
        {
          match: 'db_prefix',
          replacement: '<%= secrets.db_prefix %>'
        }
      ]
    },
    src: '<%= config.srcFolders.config %>wp-config.php',
    dest: '<%= config.rootFolder %>wp-config.php'
  },
  staging: {
    options: {
      patterns: [
        {
          json: '<%= secrets.staging %>'
        },
        {
          match: 'db_prefix',
          replacement: '<%= secrets.db_prefix %>'
        }
      ]
    },
    src: '<%= config.srcFolders.config %>wp-config.php',
    dest: '<%= config.rootFolder %>wp-config.php'
  },
  production: {
    options: {
      patterns: [
        {
          json: '<%= secrets.production %>'
        },
        {
          match: 'db_prefix',
          replacement: '<%= secrets.db_prefix %>'
        }
      ]
    },
    src: '<%= config.srcFolders.config %>wp-config.php',
    dest: '<%= config.rootFolder %>wp-config.php'
  },
  // replace the keys with ones that can be downloaded directly through the wp api
  keys: {
    options: {
      patterns: [
        {
          match: 'include',
          replacement: '<%= grunt.file.read("keys.php") %>'
        }
      ]
    },
    src: '<%= config.srcFolders.config %>wp-config-prod.php',
    dest: '<%= config.srcFolders.config %>wp-config.php'
  },
  keysDev: {
    options: {
      patterns: [
        {
          match: 'include',
          replacement: '<%= grunt.file.read("keys.php") %>'
        }
      ]
    },
    src: '<%= config.srcFolders.config %>wp-config-dev.php',
    dest: '<%= config.srcFolders.config %>wp-config.php'
  },
  acfProKey: {
    options: {
      patterns: [
        {
          match: 'acfProKey',
          replacement: '<%= secrets.acfProKey %>'
        }
      ]
    },
    src: 'composer.json',
    dest: 'composer.json'
  },
  themeSetup: {
    options: {
      patterns: [
        {
          match: 'rafhun',
          replacement: '<%= grunt.config( "prompt.themeName" ) %>'
        }
      ],
      usePrefix: false
    },
    files: [
      {
        src: 'Gruntconfig.yml',
        dest: 'Gruntconfig.yml'
      }
    ]
  },
  themeName: {
    options: {
      patterns: [
        {
          match: 'themeName',
          replacement: '<%= config.themeName %>'
        }
      ]
    },
    src: '<%= config.srcFolders.config %>kss/template/index.html',
    dest: '<%= config.srcFolders.config %>kss/template/index.html'
  }
}
