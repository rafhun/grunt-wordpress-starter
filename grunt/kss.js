module.exports = {
  options: {
    css: ['/<%= config.buildFolders.theme %><%= config.themeName %>/style.css', '/<%= config.buildFolders.theme %><%= config.themeName %>/<%= config.buildFolders.icons %>icons.data.svg.css'],
    js: '/<%= config.buildFolders.theme %><%= config.themeName %>/script.js',
    // template: 'node_modules/grunt-kss/node_modules/kss/generator/handlebars/template/'
  },
  styleguide: {
    files: {
      '<%= config.rootFolder %><%= config.buildFolders.styleguide %>' : ['<%= config.srcFolders.scss %>']
    }
  }
}
