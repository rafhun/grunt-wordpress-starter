module.exports = {
  options: {
    map: {
      inline: false,
      annotation: "<%= destFolder %>",
    },

    processors: [
      require( "postcss-cssnext" )( {
        browserslist: ["last 3 versions"],
        features: {
          customProperties: { preserve: true },
          selectorMatches: { lineBreak: true },
        },
      } ),
    ],
  },
  main: {
    src: "<%= sass.main.dest %>",
    dest: "<%= destFolder %>style.css",
  },
  editorStyles: {
    src: "<%=sass.editorStyles.dest %>",
    dest: "<%= config.srcFolders.css %>editor-styles.css",
  },
};
