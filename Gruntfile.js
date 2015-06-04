module.exports = function(grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json'),
      destFolder: '<%= pkg.buildFolders.theme %><%= pkg.themeName %>/',
      secrets: grunt.file.readJSON('secrets.json'),
      banner: '/*\n' +
              ' * Theme Name: <%= pkg.themeName %>\n' +
              ' * Theme URI: \n' +
              ' * Author: <%= pkg.author %>\n' +
              ' * Author URI: https://github.com/rafhun\n' +
              ' * Description: Theme developed by rafhun from Werbelinie AG for ...\n' +
              ' * Version: <%= pkg.version %>\n' +
              ' * License: <%= pkg.license %>\n' +
              ' * License URI: http://www.gnu.org/licenses/gpl-2.0.html\n' +
              ' * Tags: \n' +
              ' * Text Domain: <%= pkg.themeName %>\n\n' +
              ' * This stylesheet is not used by this Wordpress site it only exists as reference for Wordpress. The stylesheet in use can be found in this folder as style.min.{hash}.css\n' +
              ' */'
    }
  });
};
