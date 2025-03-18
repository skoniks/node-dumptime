#!/usr/bin/env node

const { writeFileSync, mkdirSync } = require('fs');
const { resolve, dirname } = require('path');

try {
  const time = (Date.now() / 1000) | 0;
  const args = process.argv.slice(2);
  const path = resolve(args[0]);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, `${time}`);
} catch (error) {
  console.error(error);
}
