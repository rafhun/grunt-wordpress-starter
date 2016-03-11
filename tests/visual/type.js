casper.thenOpen( phantom.rootUrl + 'styleguide/section-atoms.html')
  .then( function() {
    phantomcss.screenshot( '#kssref-atoms-typography .kss-modifier__example', 'Typography' );
  });
