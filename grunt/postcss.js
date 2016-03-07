module.exports = {
  options: {
    map: {
      inline: false,
      annotation: '<%= destFolder %>'
    },

    processors: [
      require( 'autoprefixer' )( { browsers: 'last 2 versions' } )
    ]
  },
  main: {
    src: '<%= sass.main.dest %>',
    dest: '<%= destFolder %>style.css'
  },
  editorStyles: {
    src: '<%=sass.editorStyles.dest %>',
    dest: '<%= config.srcFolders.css %>editor-styles.css'
  }
}
