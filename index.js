var page = require('webpage').create();
page.open('http://yahoo.com/', function() {
  page.render('github.png');
  phantom.exit();
});
