module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json'),
      config: grunt.file.readYAML('Gruntconfig.yml'),
      destFolder: '<%= config.rootFolder %><%= config.buildFolders.themes %><%= config.themeName %>/',
      secrets: grunt.file.readJSON('secrets.json'),
      banner: '/*\n' +
              ' * Theme Name: <%= config.themeName %>\n' +
              ' * Theme URI: \n' +
              ' * Author: <%= pkg.author %>\n' +
              ' * Author URI: https://github.com/rafhun\n' +
              ' * Description: Theme developed by rafhun from Werbelinie AG for ...\n' +
              ' * Version: <%= pkg.version %>\n' +
              ' * License: <%= pkg.license %>\n' +
              ' * License URI: http://www.gnu.org/licenses/gpl-3.0.html\n' +
              ' * Tags: \n' +
              ' * Text Domain: <%= config.themeName %>\n' +
              ' * Copyright <%= grunt.template.today("yyyy") %>: <%= pkg.author %>\n *\n' +
              ' * This stylesheet is not used by this Wordpress site it only exists as reference for Wordpress. The stylesheet in use can be found in this folder as style.min.{hash}.css\n' +
              ' */'
    },
    jitGrunt: {
      staticMappings: {
        bower_concat: 'grunt-bower-concat',
        browserSync: 'grunt-browser-sync',
        conventionalChangelog: 'grunt-conventional-changelog',
        ftp_push: 'grunt-ftp-push',
        makepot: 'grunt-wp-i18n',
        phantomcss: '@micahgodbolt/grunt-phantomcss',
        sasslint: 'grunt-sass-lint',
        usebanner: 'grunt-banner'
      }
    }
  });
};
