module.exports = {
  dist: {
        files: [{
            expand: true,
            cwd: '<%= pkg.srcFolders.icons %>',
            src: ['*.svg'],
            dest: '<%= pkg.srcFolders.iconsMin %>'
        }]
    }
}
