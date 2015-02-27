module.exports = {
  options: {
    html: '<%= pkg.srcFolders.jade %>favicons.html',
    coast: true,
    firefox: true,
    androidHomescreen: true,
    appleTouchBackgroundColor: '#fff', // auto, none or #color
    tileBlackWhite: true, // make white-only icon on win8 tile
    tileColor: '#00f', // auto, none or #color -> this is important if above is true
  },
  icons: {
    src: '<%= pkg.srcFolders.images %>favicon.png',
    dest: 'wwwroot/'
  }
}
