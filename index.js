const { writeFileSync, mkdirSync } = require('fs');
const { resolve, dirname } = require('path');

try {
  const time = (Date.now() / 1000) | 0;
  const path = resolve(process.argv[2]);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${time}`);
} catch (error) {
  console.error(error);
}
