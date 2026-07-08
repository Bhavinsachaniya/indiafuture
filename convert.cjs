const fs = require('fs');
const path = require('path');

const srcDir = 'b:/PROJECTS/Vertex AI Studio/Pixel Perfect Pages/src/components/Bento';
const outDir = 'b:/PROJECTS/Vertex AI Studio/Pixel Perfect Pages/src/components/site/bento-cards';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

function htmlToJsx(html) {
  let jsx = html.replace(/class=/g, 'className=');
  
  const attributesToFix = [
    'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit',
    'stroke-dasharray', 'stroke-dashoffset', 'stop-color', 'stop-opacity',
    'fill-rule', 'clip-rule', 'gradientUnits', 'gradientTransform',
    'font-family', 'font-weight', 'font-size', 'font-style'
  ];
  
  for (const attr of attributesToFix) {
    const regex = new RegExp(attr + '=', 'g');
    jsx = jsx.replace(regex, toCamelCase(attr) + '=');
  }

  // Self close void elements like circle, line, path, rect, ellipse, polygon, polyline, stop
  // Actually, SVGs in HTML might not be self-closed properly for JSX, but let's assume they are since standard SVG uses self-closing.
  // Wait, the HTML parsed SVGs might have unclosed <circle> or <path> tags. I'll rely on the original formatting.
  // We need to replace HTML comments with JSX comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  // Need to replace style attributes: style="animation-delay: 0.1s;" -> style={{ animationDelay: '0.1s' }}
  jsx = jsx.replace(/style="([^"]+)"/g, (match, styleString) => {
    const rules = styleString.split(';').filter(r => r.trim());
    let objStr = rules.map(rule => {
      const [key, value] = rule.split(':');
      if (!key || !value) return '';
      const camelKey = toCamelCase(key.trim());
      return `"${camelKey}": "${value.trim()}"`;
    }).join(', ');
    return `style={{${objStr}}}`;
  });

  return jsx;
}

const dirFiles = fs.readdirSync(srcDir);

dirFiles.forEach(file => {
  if (file.endsWith('.tsx') && !file.includes('bento-cards')) {
    const content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    
    const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
    let styleContent = styleMatch ? styleMatch[1] : '';
    
    // Change colors to strictly orange:
    // Original colors: #E1643A, #F18C35, #DE8945, #F7A446, #EA9D43, #F1A04B, #FDAE33, #8E4620 etc.
    // They are already quite orange actually! Wait, let's look at the SVGs, they use #F1A04B etc.
    // Some are green like #2AAD65, #249A58. Let's make sure they are orange.
    styleContent = styleContent.replace(/#2AAD65/gi, '#E6631E');
    styleContent = styleContent.replace(/#249A58/gi, '#CC5517');
    
    // Some SVGs use fill="#2AAD65" directly, we should recolor them in the JSX too.
    
    const svgMatch = content.match(/<svg[\s\S]*?<\/svg>/);
    if (svgMatch) {
      let jsxSvg = htmlToJsx(svgMatch[0]);
      
      // Recolor hardcoded fills
      jsxSvg = jsxSvg.replace(/fill="#2AAD65"/gi, 'fill="#E6631E"');
      jsxSvg = jsxSvg.replace(/fill="#249A58"/gi, 'fill="#CC5517"');

      // Card Name
      let cardNum = file.replace('.tsx', '').replace('bento', '1');
      const componentName = 'Card' + cardNum;
      
      const componentContent = `import { useEffect, useRef, useState } from 'react';
import './${componentName}.css';

export function ${componentName}() {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });
    }, { threshold: 0.2 });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={\`bento-wrapper \${isActive ? 'is-active' : ''}\`}>
      ${jsxSvg}
    </div>
  );
}
`;
      fs.writeFileSync(path.join(outDir, `${componentName}.tsx`), componentContent);
      fs.writeFileSync(path.join(outDir, `${componentName}.css`), styleContent);
    }
  }
});
console.log('Conversion complete.');
