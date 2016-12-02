const _fs = require('fs');
const _path = require('path');

const tree = JSON.parse(_fs.readFileSync('302.json'));
const destination = _path.join(__dirname, 'build/robots.txt');

var list = [
  'test',
  'windows-installer.cmd',
  'windows-installer.ps1',
  'installer.exe',
  'installer'
];

Object.keys(tree).forEach(function(category) {
  var url = '/doc/';
  if ( category !== '_' ) {
    url += category + '/';
  }

  tree[category].forEach(function(filename) {
    list.push(url + filename);
  });
});

var result = [
  'User-agent: *'
].concat(list.map(function(iter) {
  return 'Disallow: ' + iter;
})).join('\n');

_fs.writeFileSync(destination, result);
