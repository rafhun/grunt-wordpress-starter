module.exports = {
  contentImg: {
    files: [{
      expand: true,
      cwd: '<%=pkg.srcFolders.contentImg%>',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= pkg.buildFolders.contentImg %>'
    }]
  },
  themeImg: {
    files: [{
      expand: true,
      cwd: '<%=pkg.srcFolders.themeImg %>',
      src: ['**/*.{png,jpg,gif,svg}'],
      dest: '<%= destFolder %><%= pkg.buildFolders.img %>'
    }]
  }
}
