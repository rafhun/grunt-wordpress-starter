module.exports = {
  'local': {
    'options': {
      'title': 'Local DB',

      'database': '<%= secrets.local.db_name %>',
      'user': '<%= secrets.local.db_user %>',
      'pass': '<%= secrets.local.db_password %>',
      'host': '<%= secrets.local.db_host %>',

      'backup_to': '<%= pkg.dbDump %>backup-<%= grunt.template.today("yyyymmdd-HHMMss") %>.sql'
    }
  }
}
