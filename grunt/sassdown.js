module.exports = {
  styleguide: {
    options: {
      assets: [
        '<%= destFolder %>style.css',
        '<%= destFolder %><%= config.buildFolders.icons %>icons.data.svg.css',
        '<%= destFolder %>script.js'
      ],
      excludeMissing: true,
      readme: '<%= config.srcFolders.scss %>readme.md',
      theme: 'sassdown/theme.css'
    },
    files: [{
      expand: true,
      cwd: '<%= config.srcFolders.scss %>',
      src: '**/*.scss',
      dest: '<%= config.buildFolders.styleguide %>'
    }]
  }
}
