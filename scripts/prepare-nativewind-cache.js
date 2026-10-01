const fs = require('fs');
const path = require('path');

const cacheDir = path.join('node_modules', '.cache', 'nativewind');
const cacheFile = path.join(cacheDir, 'global.css');

fs.mkdirSync(cacheDir, { recursive: true });

if (!fs.existsSync(cacheFile)) {
  fs.writeFileSync(cacheFile, '');
}