module.exports = {
  imagesContent: {
    files: [{
      expand: true,
      cwd: '<%=config.srcFolders.imagesContent%>',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= config.buildFolders.imagesContent %>'
    }]
  },
  imagesTheme: {
    files: [{
      expand: true,
      cwd: '<%=config.srcFolders.imagesTheme %>',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= destFolder %><%= config.buildFolders.images %>'
    }]
  }
}
