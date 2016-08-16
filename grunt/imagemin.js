module.exports = {
  imagesUpload: {
    files: [{
      expand: true,
      cwd: "<%=config.srcFolders.imagesUpload %>",
      src: ["**/*.{png,jpg,gif,svg}"],
      dest: "<%= config.srcFolders.imagesToUpload %>",
    }],
  },
  imagesTheme: {
    files: [{
      expand: true,
      cwd: "<%=config.srcFolders.images %>",
      src: [ "**/*.{png,jpg,gif,svg}", "!favicon.png" ],
      dest: "<%= destFolder %><%= config.buildFolders.images %>",
    }],
  },
};
