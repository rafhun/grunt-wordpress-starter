module.exports = {
  options: { timestamp: true },
  editorStyles: {
    files: [{
      src: "<%= config.srcFolders.css %>editor-styles.css",
      dest: "<%= destFolder %>editor-styles.css",
    }],
  },
  fonts: {
    files: [
      {
        expand: true,
        cwd: "<%= config.srcFolders.fonts %>",
        src: ["*"],
        dest: "<%= destFolder %><%= config.buildFolders.fonts %>",
        filter: "isFile",
      },
    ],
  },
  functions: {
    files: [{
      expand: true,
      cwd: "<%= config.srcFolders.php %>",
      src: ["functions.php"],
      dest: "<%= destFolder %>",
    }],
  },
  hashTargets: {
    files: [{
      expand: true,
      cwd: "<%= config.srcFolders.php %>",
      src: [ "header.php", "functions.php" ],
      dest: "<%= destFolder %>",
    }],
  },
  header: {
    files: [{
      expand: true,
      cwd: "<%= config.srcFolders.php %>",
      src: ["header.php"],
      dest: "<%= destFolder %>",
    }],
  },
  icons: {
    files: [{
      expand: true,
      cwd: "<%= config.srcFolders.grunticon %>",
      src: ["**"],
      dest: "<%= destFolder %><%= config.buildFolders.icons %>",
    }],
  },
  languages: {
    files: [{
      expand: true,
      cwd: "<%= config.srcFolders.languages %>",
      src: ["**"],
      dest: "<%= destFolder %><%= config.buildFolders.languages %>",
    }],
  },
  nucleus: {
    files: [
      {
        expand: true,
        cwd: "<%= config.srcFolders.config %>nucleus/",
        src: ["**"],
        dest: "<%= config.srcFolders.config %>.nucleus/",
      },
    ],
  },
  php: {
    files: [
      {
        expand: true,
        cwd: "<%= config.srcFolders.php %>",
        src: [ "**", "!header.php" ],
        dest: "<%= destFolder %>",
      },
    ],
  },
  htaccess: {
    files: [
      {
        src: "<%= config.srcFolders.config %>.htaccess",
        dest: "<%= config.rootFolder %>.htaccess",
      },
    ],
  },
  htaccessProduction: {
    files: [
      {
        src: "<%= config.srcFolders.config %>.htaccess~production",
        dest: "<%= config.rootFolder %>.htaccess",
      },
    ],
  },
  htaccessMulti: {
    files: [
      {
        src: "<%= config.srcFolders.config %>.htaccess~multi",
        dest: "<%= config.rootFolder %>.htaccess",
      },
    ],
  },
  htaccessProductionMulti: {
    files: [
      {
        src: "<%= config.srcFolders.config %>.htaccess~productionMulti",
        dest: "<%= config.rootFolder %>.htaccess",
      },
    ],
  },
  customPlugins: {
    files: [
      {
        expand: true,
        cwd: "<%= config.srcFolders.customPlugins %>",
        src: [ "**", "!**/gulpfile.js", "!**/.gitignore", "!**/node_modules/**", "!**/package.json" ],
        dest: "<%= config.rootFolder %><%= config.buildFolders.plugins %>",
      },
    ],
  },
  customThemes: {
    files: [
      {
        expand: true,
        cwd: "<%= config.srcFolders.customThemes %>",
        src: ["**"],
        dest: "<%= config.rootFolder %><%= config.buildFolders.themes %>",
      },
    ],
  },
};
