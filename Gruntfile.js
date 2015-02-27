module.exports = function(grunt) {
  
  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json'),
      destFolder: '<%= pkg.buildFolders.theme %><%= pkg.themeName %>/',
      secrets: grunt.file.readJSON('secrets.json')
    }
  });
};
