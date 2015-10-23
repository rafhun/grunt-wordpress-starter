module.exports = {
  options: {
    text_domain: '<%= config.themeName %>',
    dest: '<%= config.srcFolders.languages %>',
    encoding: 'UTF-8',
    keywords: [ //WordPress localisation functions
      '__:1',
      '_e:1',
      '_x:1,2c',
      'esc_html__:1',
      'esc_html_e:1',
      'esc_html_x:1,2c',
      'esc_attr__:1',
      'esc_attr_e:1',
      'esc_attr_x:1,2c',
      '_ex:1,2c',
      '_n:1,2',
      '_nx:1,2,4c',
      '_n_noop:1,2',
      '_nx_noop:1,2,3c'
    ],
    msgmerge: true
  },
  files: {
    cwd: '<%= config.srcFolders.php %>',
    src: ['**/*.php'],
    expand: true,
  }
}
