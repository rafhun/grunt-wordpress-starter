module.exports = {
  options: {
    css: ['/<%= config.buildFolders.theme %><%= config.themeName %>/style.css'],
    js: '/<%= config.buildFolders.theme %><%= config.themeName %>/<%= config.buildFolders.js %>script.js',
    template: '<%= config.srcFolders.config %>kss/template/'
  },
  styleguide: {
    files: {
      '<%= config.rootFolder %><%= config.buildFolders.styleguide %>' : ['<%= config.srcFolders.scss %>']
    }
  }
}
