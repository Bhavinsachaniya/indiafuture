const fs = require('fs');
const path = require('path');
const routesDir = 'src/routes';
function processFile(filePath) {
  if (filePath.endsWith('__root.tsx')) return;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/import\s*{\s*Nav\s*}\s*from\s*["']@\/components\/site\/Nav["'];?\n?/g, '');
  content = content.replace(/import\s*{\s*Footer\s*}\s*from\s*["']@\/components\/site\/Footer["'];?\n?/g, '');
  content = content.replace(/\s*<Nav[^>]*\/>\s*/g, '\n');
  content = content.replace(/\s*<Footer\s*\/>\s*/g, '\n');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Processed', filePath);
}
function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}
walk(routesDir);
