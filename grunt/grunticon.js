module.exports = {
  icons: {
    files: [{
      expand: true,
      cwd: '<%= pkg.srcFolders.iconsMin %>',
      src: ['*.svg', '*.png'],
      dest: '<%= destFolder %><%= pkg.buildFolders.icons %>'
    }],
    options: {
      'compressPNG': true,

    }
  }
}
