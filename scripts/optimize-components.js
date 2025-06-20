const fs = require('fs');
const path = require('path');

const OPTIMIZATION_PATTERNS = [
  // Convert inline handlers to useCallback
  {
    find: /onClick={\(\) => ([^}]+)}/g,
    replace: (match, handler) => {
      return `onClick={useCallback(() => ${handler}, [])}`;
    }
  },
  // Add memo for pure presentational components
  {
    find: /(export default function \w+)\(/g,
    replace: (match, declaration) => {
      if (declaration.includes('memo')) return match;
      return `export default memo(${declaration.replace('export default ', '')}`;
    }
  },
  // Ensure proper hook dependencies
  {
    find: /useEffect\(\(\) => {([^}]+)}, \[\]\)/g,
    replace: (match, effect) => {
      // Extract variables from effect body
      const vars = effect.match(/\b[A-Za-z]\w*\b/g) || [];
      const deps = [...new Set(vars)].filter(v => 
        !['window', 'document', 'console', 'null', 'undefined'].includes(v)
      );
      return `useEffect(() => {${effect}}, [${deps.join(', ')}])`;
    }
  }
];

function optimizeComponent(content) {
  let optimized = content;
  let modified = false;

  // Add missing imports
  if (content.includes('useCallback') && !content.includes('import { useCallback }')) {
    optimized = optimized.replace(
      /import React([^;]+);/,
      `import React, { useCallback }$1;`
    );
    modified = true;
  }
  if (content.includes('memo(') && !content.includes('import { memo }')) {
    optimized = optimized.replace(
      /import React([^;]+);/,
      `import React, { memo }$1;`
    );
    modified = true;
  }

  // Apply optimization patterns
  OPTIMIZATION_PATTERNS.forEach(({ find, replace }) => {
    const newContent = optimized.replace(find, replace);
    if (newContent !== optimized) {
      modified = true;
      optimized = newContent;
    }
  });

  return { content: optimized, modified };
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let modifiedCount = 0;

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      modifiedCount += processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const { content: optimized, modified } = optimizeComponent(content);
      
      if (modified) {
        fs.writeFileSync(fullPath, optimized);
        console.log(`✅ Optimized ${fullPath}`);
        modifiedCount++;
      }
    }
  });

  return modifiedCount;
}

// Start processing from the components directory
const componentsDir = path.join(__dirname, '..', 'src', 'components');
const modifiedCount = processDirectory(componentsDir);

console.log(`\n🎉 Optimized ${modifiedCount} components`);