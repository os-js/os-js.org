const _fs = require('fs');
const _path = require('path');
const _util = require('util');

const tree = JSON.parse(_fs.readFileSync('302.json'));
const root = _path.join(__dirname, 'build/');
const template = _fs.readFileSync(_path.join(__dirname, 'layouts/302.html')).toString();

Object.keys(tree).forEach(function(category) {
  var url = '';

  if ( ['_', 'manuals', 'tutorials'].indexOf(category) !== -1 ) {
    url += '/manual';
  } else {
    url += '/doc/' + category;
  }

  tree[category].forEach(function(filename) {
    const r = category === '_' ? '' : category;
    const destination = _path.join('doc', r, filename);
    console.log(_util.format('RewriteRule "^/%s$" %s [L,R=301]', destination, url));
  });
});
