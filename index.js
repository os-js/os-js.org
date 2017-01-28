const _fs = require('node-fs-extra');
const _path = require('path');

const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const less = require('metalsmith-less')
const ignore = require('metalsmith-ignore');
const watch = require('metalsmith-watch');
const metalsmithPrism = require('metalsmith-prism');
const sitemap = require('metalsmith-sitemap');

const handlebars = require('handlebars');
handlebars.registerHelper('startsWith', function(prefix, str, options) {
  if ( str.substr(0, prefix.length) === prefix ) {
    return options.fn(this);
  }
  return options.inverse(this);
});
handlebars.registerHelper('pathClass', function(str) {
  return str.replace(/[^A-z0-9]/g, '_');
});

var i = Metalsmith(__dirname)
  .metadata({
    sitename: "OS.js",
    siteurl: "https://os.js.org/",
    description: "OS.js"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(less())
  .use(markdown({langPrefix: 'language-'}))
  .use(metalsmithPrism())
  .use(permalinks({
    relative: false
  }))
  .use(ignore([
    'less/**',
    'less/.*'
  ]))
  .use(layouts({
    engine: 'handlebars'
  }))
  .use(sitemap({
    hostname: "https://www.os-js.org",
    omitIndex: true
  }))
  .use(function(files, metalsmith, done) {
    setImmediate(done);

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
        const destination = _path.join(root, 'doc', r, filename);
        const html = template.replace('%URL%', url);

        try {
          _fs.mkdirSync(_path.dirname(destination));
        } catch ( e ) {}
        _fs.writeFileSync(destination, html);
      });
    });

  })
  .use(function(files, metalsmith, done) {
    setImmediate(done);

    const tree = JSON.parse(_fs.readFileSync('302.json'));
    const destination = _path.join(__dirname, 'build/robots.txt');

    const list = [
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
  })
  .use(function(files, metalsmith, done) {
    setImmediate(done);

    _fs.copySync(_path.join(__dirname, 'OS.js/src/installer/installer.sh'), _path.join(__dirname, 'src/installer'));
    _fs.copySync(_path.join(__dirname, 'OS.js/src/installer/installer.ps1'), _path.join(__dirname, 'src/installer.ps1'));
  });

if ( process.argv[2] === '--watch' ) {
  i.use(watch({
    paths: {
      "${source}/**/*": true,
      "302.json": true,
      "layouts/**/*": "**/*"
    },
    livereload: true,
  }));
}

i.build(function(err) {
  if (err) throw err;
});

