casper.thenOpen( phantom.rootUrl + 'styleguide/section-atoms.html')
  .then( function() {
    this.evaluate( function() {
      $( '*' ).css( 'font-family', 'arial, sans-serif' );
    });
  }).then( function() {
    casper.click( '.kss-header button' );
  }).then( function() {
    phantomcss.screenshot( '#kssref-atoms-typography .kss-modifier__example', 'Typography' );
  });
