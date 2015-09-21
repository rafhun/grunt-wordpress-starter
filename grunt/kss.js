module.exports = {
  options: {
    css: ['<%= destFolder %>style.css', '<%= destFolder %><%= config.buildFolders.icons %>icons.data.svg.css'],
    js: '<%= destFolder %>script.js',
    template: 'node_modules/grunt-kss/node_modules/kss/generator/handlebars/template/'
  },
  styleguide: {
    files: {
      '<%= config.buildFolders.styleguide %>' : ['<%= config.srcFolders.scss %>']
    }
  }
}
