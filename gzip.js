const path = require('path'),
  fs = require('fs'),
  zlib = require('zlib');

const dir = path.join(__dirname, 'dist/browser');
const files = fs.readdirSync(dir);
const gzip = zlib.createGzip();

files.forEach(file => {
  if (/\.(html|js|css)$/.test(file)) {
    console.log('File to compress...');
    console.log(path.join(dir,file));
    compress(file);
  }
});

function compress(file) {
  const inp = fs.createReadStream(path.join(dir,file));
  const out = fs.createWriteStream(path.join(dir,file + '.gz'));
  inp.pipe(gzip).pipe(out);
}
