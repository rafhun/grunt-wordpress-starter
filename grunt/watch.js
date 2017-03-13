module.exports = {
  options: { spawn: false },
  gruntConfig: {
    files: [
      "grunt/*.js",
      "Gruntfile.js",
    ],
    tasks: ["eslint"],
    options: { reload: true },
  },
  esLint: {
    files: [
      "<%= config.srcFolders.js %>script.js",
      "<%= config.srcFolders.jsMolecules %>**/*.js",
      "!<%= config.srcFolders.js %>**/*.es5.js",
    ],
    tasks: ["eslint"],
  },
  scripts: {
    files: ["<%= config.srcFolders.js %>**/*.js"],
    tasks: [
      "clean:hashedJs",
      "scripts",
      "cssmin",
      "copy:functions",
      "hashres",
      "shell:styleguide",
    ],
  },
  styles: {
    files: ["<%= config.srcFolders.scss %>**/*.scss"],
    tasks: [
      "clean:hashedCss",
      "styles",
      "uglify",
      "copy:functions",
      "hashres",
      "shell:styleguide",
    ],
  },
  images: {
    files: ["<%= config.srcFolders.images %>**/*.{png,jpg,gif,svg}"],
    tasks: ["imagemin:imagesTheme"],
  },
  grunticon: {
    files: ["<%= config.srcFolders.icons %>*.svg"],
    tasks: [
      "clean:hashedIcons",
      "clean:nucleus",
      "svgmin",
      "grunticon",
      "copy:header",
      "copy:icons",
      "copy:nucleus",
      "hashres",
      "shell:styleguide",
    ],
  },
  languages: {
    files: ["<%= config.srcFolders.languages %>*.po"],
    tasks: ["translations"],
  },
  php: {
    files: [
      "<%= config.srcFolders.php %>**/*.php",
      "!<%= config.srcFolders.php %>header.php",
    ],
    tasks: [
      "clean:hashes",
      "copy:php",
      "cssmin",
      "uglify",
      "hashres",
      "shell:styleguide",
    ],
  },
  phpHeader: {
    files: ["<%= config.srcFolders.php %>header.php"],
    tasks: [
      "clean:hashedIcons",
      "clean:nucleus",
      "copy:header",
      "copy:icons",
      "copy:nucleus",
      "hashres",
      "shell:styleguide",
    ],
  },
  nucleus: {
    files: ["<%= config.srcFolders.config %>nucleus/**"],
    tasks: [
      "clean:nucleus",
      "copy:nucleus",
      "hashres",
      "shell:styleguide",
    ],
  },
  htaccess: {
    files: ["<%= config.srcFolders.config %>.htaccess"],
    tasks: ["copy:htaccess"],
  },
  customPlugins: {
    files: ["<%= config.srcFolders.customPlugins %>**"],
    tasks: ["copy:customPlugins"],
  },
  customThemes: {
    files: ["<%= config.srcFolders.customThemes %>**"],
    tasks: ["copy:customThemes"],
  },
};
