module.exports = {
  local: {
    options: {
      patterns: [
        { json: "<%= secrets.local %>" },
        {
          match: "db_prefix",
          replacement: "<%= secrets.db_prefix %>",
        },
        {
          match: /(https?:\/\/)/g,
          replace: "",
        },
        {
          match: /(\.\w{2,3})\//g,
          replace: "$1",
        },
      ],
    },
    src: "<%= config.srcFolders.config %>wp-config.php",
    dest: "<%= config.rootFolder %>wp-config.php",
  },
  staging: {
    options: {
      patterns: [
        { json: "<%= secrets.staging %>" },
        {
          match: "db_prefix",
          replacement: "<%= secrets.db_prefix %>",
        },
        {
          match: /(https?:\/\/)/g,
          replace: "",
        },
        {
          match: /(\.\w{2,3})\//g,
          replace: "$1",
        },
      ],
    },
    src: "<%= config.srcFolders.config %>wp-config.php",
    dest: "<%= config.rootFolder %>wp-config.php",
  },
  production: {
    options: {
      patterns: [
        { json: "<%= secrets.production %>" },
        {
          match: "db_prefix",
          replacement: "<%= secrets.db_prefix %>",
        },
        {
          match: /(https?:\/\/)/g,
          replace: "",
        },
        {
          match: /(\.\w{2,3})\//g,
          replace: "$1",
        },
      ],
    },
    src: "<%= config.srcFolders.config %>wp-config.php",
    dest: "<%= config.rootFolder %>wp-config.php",
  },
  keys: {
    options: {
      patterns: [
        {
          match: "include",
          replacement: '<%= grunt.file.read("keys.php") %>',
        },
      ],
    },
    src: "<%= config.srcFolders.config %>wp-config-single.php",
    dest: "<%= config.srcFolders.config %>wp-config.php",
  },
  keysMulti: {
    options: {
      patterns: [
        {
          match: "include",
          replacement: '<%= grunt.file.read("keys.php") %>',
        },
      ],
    },
    src: "<%= config.srcFolders.config %>wp-config-multi.php",
    dest: "<%= config.srcFolders.config %>wp-config.php",
  },
  acfProKey: {
    options: {
      patterns: [
        {
          match: "acfProKey",
          replacement: "<%= secrets.acfProKey %>",
        },
        {
          match: "themeName",
          replacement: "<%= config.themeName %>",
        },
      ],
    },
    src: "composer.json",
    dest: "composer.json",
  },
  themeSetup: {
    options: {
      patterns: [
        {
          match: "themeNamePlaceholder",
          replacement: '<%= grunt.config( "prompt.themeName" ) %>',
        },
        {
          match: "dockerNamePlaceholder",
          replacement: '<%= grunt.config( "prompt.dockerName" ) %>',
        },
        {
          match: "wwwroot/",
          replacement: '<%= grunt.config( "prompt.rootFolder" ) %>',
        },
        {
          match: "de_CH",
          replacement: '<%= grunt.config( "prompt.locale" ) %>',
        },
      ],
      usePrefix: false,
    },
    files: [
      {
        src: "Gruntconfig.yml",
        dest: "Gruntconfig.yml",
      },
    ],
  },
  themeName: {
    options: {
      patterns: [
        {
          match: "themeName",
          replacement: "<%= config.themeName %>",
        },
      ],
    },
    src: "<%= config.srcFolders.config %>nucleus/common/layout.pug",
    dest: "<%= config.srcFolders.config %>nucleus/common/layout.pug",
  },
};
