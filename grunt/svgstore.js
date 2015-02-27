module.exports = {
  options: {
    prefix: 'shape-',
    cleanup: true, // cleans up inline style formatting that might interfere with css
    svg: {
      style: 'display: none;'
    }
  },
  default: {
    files: {
      '<%= pkg.srcFolders.images %>shapes.svg' : ['<%= pkg.srcFolders.svg %>*.svg']
    }
  }
}
