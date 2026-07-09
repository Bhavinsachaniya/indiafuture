const fs = require('fs');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.tsx')) {
      files.push(name);
    }
  }
  return files;
}

const files = getFiles('src/components/programs');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  content = content.replace(/<p className="text-xs uppercase tracking-\[0\.2em\][^\>]*>([\s\S]*?)<\/p>/g, (match, inner) => {
    if (inner.includes('<span')) return match;
    
    let text = inner.trim();
    if (text === '{data.label}') return match;
    if (text === 'Questions') return match;
    
    text = text.toUpperCase();
    
    return `<div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-brand/40" /> ${text} <span className="w-12 h-[1px] bg-brand/40" />
            </p>
          </div>`;
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
