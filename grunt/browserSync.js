module.exports = {
  dev: {
    bsFiles: { src: [ "<%= destFolder %>*.{css,php,js}", "<%= config.rootFolder %><%= config.buildFolders.styleguide %>*.html" ] },
    options: {
      watchTask: true,
      proxy: "localhost:8080", // this is the port mapped by docker-compose.yml
      startPath: "<%= config.buildFolders.styleguide %>",

      // enable if you encounter any problems with browserSync
      // logLevel: 'debug',
      notify: false,

      // since we often have copying and rehashing going on, this makes sense
      reloadDelay: 1000,

      // tunnel the browsersync server through a random public url (activate if needed), first option for random subdomain, second option if you want to try a specific one -> only use one of them
      // tunnel: true,
      // attempt to use URL "http://werbelinie.localtunnel.me"
      // tunnel: 'werbelinie',
    },
  },
};
