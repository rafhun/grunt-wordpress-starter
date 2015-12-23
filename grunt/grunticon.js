module.exports = {
  icons: {
    files: [{
      expand: true,
      cwd: '<%= config.srcFolders.iconsMin %>',
      src: ['*.svg', '*.png'],
      dest: '<%= config.srcFolders.grunticon %>'
    }],
    options: {
      enhanceSVG: true,
      compressPNG: true,
      dynamicColorOnly: true,
      colors: {
        primary: '#000',
      },
      customselectors: {
        'home-primary': ['.icon-home:hover'],
      }
    }
  }
}
