#!/usr/bin/env bun

import { readdir, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { $ } from 'bun';

const rootDir = join(import.meta.dir, '..');

const dirsToDelete = new Set([
  'node_modules',
  '.next',
  '.turbo',
  'dist',
  'build',
  '.cache',
  'out',
  'tmp',
  'temp',
  '.output',
]);

const filesToDelete = [
  'bun.lock',
  '*.log',
  '*.tsbuildinfo',
  '.DS_Store',
  'Thumbs.db',
];

async function findAndDelete(
  dirPath: string,
  itemsToDelete: Set<string> | string[],
  isFile = false
): Promise<void> {
  try {
    const items = await readdir(dirPath);

    await Promise.all(
      items.map(async (item) => {
        const itemPath = join(dirPath, item);

        try {
          const stats = await stat(itemPath);

          if (stats.isDirectory()) {
            if (
              !isFile &&
              itemsToDelete instanceof Set &&
              itemsToDelete.has(item)
            ) {
              console.log(`🗑️  Deleting directory: ${itemPath}`);
              await rm(itemPath, { recursive: true, force: true });
            } else {
              await findAndDelete(itemPath, itemsToDelete, isFile);
            }
          } else if (isFile && Array.isArray(itemsToDelete)) {
            const shouldDelete = itemsToDelete.some((pattern) => {
              if (pattern.includes('*')) {
                const regex = new RegExp(`^${pattern.replace(/\*/g, '.*')}$`);
                return regex.test(item);
              }
              return item === pattern;
            });

            if (shouldDelete) {
              console.log(`🗑️  Deleting file: ${itemPath}`);
              await rm(itemPath, { force: true });
            }
          }
        } catch {
          // Ignore permission errors, etc.
        }
      })
    );
  } catch {
    // Ignore non-existent directories
  }
}

async function cleanTurboCache() {
  try {
    console.log('\n🔧 Cleaning Turbo cache...');
    await $`turbo daemon stop`.quiet();
    console.log('✅ Turbo daemon stopped');
  } catch {
    // Turbo daemon might not be running
  }
}

async function main() {
  console.log('🧹 Starting project cleanup...\n');

  console.log('📁 Cleaning directories...');
  await findAndDelete(rootDir, dirsToDelete);

  console.log('\n📄 Cleaning files...');
  await findAndDelete(rootDir, filesToDelete, true);

  await cleanTurboCache();

  console.log('\n✨ Cleanup complete!');
  console.log("💡 Tip: Run 'bun install' to reinstall dependencies");
}

main().catch(console.error);
