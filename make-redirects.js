const _fs = require('fs');
const _path = require('path');

const tree = JSON.parse(_fs.readFileSync('302.json'));
const root = _path.join(__dirname, 'build/');
const template = _fs.readFileSync(_path.join(__dirname, 'layouts/302.html')).toString();

Object.keys(tree).forEach(function(category) {
  var url = 'https://os.js.org';

  if ( ['_', 'manuals', 'tutorials'].indexOf(category) !== -1 ) {
    url += '/manual';
  } else {
    url += '/doc/' + category;
  }

  tree[category].forEach(function(filename) {
    const r = category === '_' ? '' : category;
    const destination = _path.join(root, 'doc', r, filename);
    const html = template.replace('%URL%', url);

    console.log(destination, '=>', url);
    try {
      _fs.mkdirSync(_path.dirname(destination));
    } catch ( e ) {}
    _fs.writeFileSync(destination, html);
  });
});
