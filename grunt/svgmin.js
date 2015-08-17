module.exports = {
  dist: {
        files: [{
            expand: true,
            cwd: '<%= config.srcFolders.icons %>',
            src: ['*.svg'],
            dest: '<%= config.srcFolders.iconsMin %>'
        }]
    }
}
