#!/usr/bin/env node

/**
 * Extracts rules from markdown documentation and generates individual rule files.
 * @module extract-rules
 */

import { existsSync, readFileSync, mkdirSync, writeFileSync, unlinkSync } from 'fs';
import { join } from 'path';

/**
 * Configuration templates for different IDEs.
 * Each template defines:
 * - extension: File extension for the output files
 * - defaultDir: Default output directory
 * - template: Function that generates the file content
 * @type {Object.<string, {extension: string, defaultDir: string, template: Function}>}
 */
const IDE_TEMPLATES = {
  copilot: {
    extension: 'instructions.md',
    defaultDir: '.github/instructions',
    template: (description, body) => ({
      header: [
        '---',
        `description: "${description}"`,
        // "applyTo: \"**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}\"",
        '---',
      ],
      body: [body, ''],
    }),
  },
  cursor: {
    extension: 'mdc',
    defaultDir: '.cursor/rules',
    template: (description, body) => ({
      header: [
        '---',
        `description: ${description}`,
        // 'globs: ',
        'alwaysApply: false',
        '---',
      ],
      body: [body, ''],
    }),
  },
  windsurf: {
    extension: 'md',
    defaultDir: '.windsurf/rules',
    template: (description, body) => ({
      header: ['---', 'trigger: model_decision', `description: ${description}`, '---'],
      body: [body, ''],
    }),
  },
};

/**
 * Reads and validates the input file.
 * @param {string} filePath - Path to the input markdown file
 * @returns {string} File content
 * @throws {Error} If file doesn't exist or can't be read
 */
function readInputFile(filePath) {
  try {
    if (!existsSync(filePath)) {
      throw new Error(`Input file not found: ${filePath}`);
    }
    return readFileSync(filePath, 'utf8');
  } catch (error) {
    throw new Error(`Failed to read input file: ${error.message}`);
  }
}

/**
 * Ensures the output directory exists and is writable.
 * @param {string} dirPath - Path to the output directory
 * @throws {Error} If directory can't be created or isn't writable
 */
function ensureOutputDirectory(dirPath) {
  if (!dirPath) {
    throw new Error('Output directory path is required');
  }

  try {
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true, mode: 0o755 });
      return;
    }

    // Test write access by creating a test file
    const testFile = join(dirPath, `.test-write-${Date.now()}`);
    try {
      writeFileSync(testFile, 'test');
      unlinkSync(testFile);
    } catch (error) {
      throw new Error(`Cannot write to directory "${dirPath}": ${error.message}`);
    }
  } catch (error) {
    throw new Error(`Failed to ensure output directory "${dirPath}": ${error.message}`);
  }
}

/**
 * Extracts sections from markdown content.
 * @param {string} content - Markdown content
 * @returns {Object} Object with section names as keys and content as values
 * @throws {Error} If content is empty or no sections are found
 */
function extractSections(content) {
  if (!content || typeof content !== 'string') {
    throw new Error('Content must be a non-empty string');
  }

  const sectionPattern = /^##\s+([^\n]+)\s*$/gm;
  const sections = {};
  let lastIdx = 0;
  let lastName = null;
  let match;
  let sectionCount = 0;

  while ((match = sectionPattern.exec(content)) !== null) {
    if (lastName) {
      sections[lastName] = content.slice(lastIdx, match.index).trim();
      sectionCount++;
    }
    lastName = match[1].trim();
    lastIdx = sectionPattern.lastIndex;
  }

  // Add the last section
  if (lastName) {
    sections[lastName] = content.slice(lastIdx).trim();
    sectionCount++;
  }

  if (sectionCount === 0) {
    throw new Error('No sections found in the provided content');
  }

  return sections;
}

/**
 * Processes a section and extracts rules.
 * @param {string} sectionContent - Content of a section
 * @param {string} outputDir - Output directory path
 * @param {Object} options - Processing options
 * @param {string} options.ide - IDE template to use
 * @returns {number} Number of successfully processed rules
 * @throws {Error} If IDE is unsupported or required parameters are missing
 */
function processSection(sectionContent, outputDir, { ide }) {
  if (!sectionContent) {
    throw new Error('Section content is required');
  }
  if (!outputDir) {
    throw new Error('Output directory is required');
  }
  if (!ide) {
    throw new Error('IDE type is required');
  }

  const template = IDE_TEMPLATES[ide];
  if (!template) {
    const availableIdes = Object.keys(IDE_TEMPLATES).join(', ');
    throw new Error(`Unsupported IDE: "${ide}". Available options: ${availableIdes}`);
  }

  const ruleRegex =
    /####\s+`([^`]+)`\s*\n+[*]{2}([\s\S]+?)[*]{2}\s*\n([\s\S]*?)(?=(?:####\s+`)|$)/g;
  let match;
  let processedCount = 0;
  let failedCount = 0;

  // Ensure output directory exists before processing rules
  ensureOutputDirectory(outputDir);

  while ((match = ruleRegex.exec(sectionContent)) !== null) {
    const slug = match[1];
    if (!slug) continue;

    const description = match[2]?.trim().replace(/\r?\n/g, ' ') || '';
    const body = match[0]
      .trim()
      .replace(
        /^####\s+`([^`]+)`/m,
        `#### [\`${slug}\`](https://github.com/mozayk/typescript-style-guide#${slug})`,
      )
      .replace(
        '[⬆ back to top](#table-of-contents)',
        '[Mozayk TypeScript Style Guide](https://github.com/mozayk/typescript-style-guide#readme)',
      );

    const { header, body: templateBody } = template.template(description, body);
    const output = [...header, ...templateBody].join('\n');
    const fileName = `${slug}.${template.extension}`;
    const outputPath = join(outputDir, fileName);

    try {
      writeFileSync(outputPath, output, 'utf8');
      console.log(`Wrote ${fileName}`);
      processedCount++;
    } catch (error) {
      console.error(`Error: Failed to write ${fileName}: ${error.message}`);
      failedCount++;
    }
  }

  if (failedCount > 0) {
    console.warn(`Warning: Failed to process ${failedCount} rule(s)`);
  }

  return processedCount;
}

/**
 * Displays help message and exits.
 */
function showHelp() {
  console.log('');
  console.log('Usage:');
  console.log('  node extract-rules.js <ide> <input-file> [output-dir] [section]');
  console.log('');
  console.log('Arguments:');
  console.log('  <ide>         Target IDE (required): copilot, cursor, or windsurf');
  console.log('  <input-file>  Path to the markdown file containing the rules (required)');
  console.log('  [output-dir]  Output directory (optional, defaults to IDE-specific directory)');
  console.log('  [section]     Section to extract (optional, default: all)');
  console.log('');
  console.log('Examples:');
  console.log('  node extract-rules.js copilot README.md');
  console.log('  node extract-rules.js cursor README.md .cursor/rules');
  console.log('  node extract-rules.js windsurf README.md .windsurf/rules all');
  console.log('  node extract-rules.js copilot README.md .github/instructions base');
  process.exit(0);
}

/**
 * Gets the list of available sections from the markdown content.
 * @param {Object} sections - Extracted sections from markdown
 * @returns {string[]} Array of available section names
 */
function getAvailableSections(sections) {
  return Object.keys(sections).filter((name) =>
    /^(base|typescript|react|style) guidelines$/i.test(name),
  );
}

/**
 * Main function to run the script.
 */
function main() {
  try {
    const args = process.argv.slice(2);
    const [ide, inputFile, outputDir, sectionFilter = 'all'] = args;

    // Show help if requested or insufficient arguments
    if (args.length < 2 || ['-h', '--help'].includes(ide || inputFile)) {
      showHelp();
      return;
    }

    // Validate IDE
    const template = IDE_TEMPLATES[ide];
    if (!template) {
      const availableIdes = Object.keys(IDE_TEMPLATES).join(', ');
      console.error(`Error: Unsupported IDE "${ide}". Available options: ${availableIdes}`);
      process.exit(1);
    }

    // Set output directory
    const finalOutputDir = outputDir || template.defaultDir;

    // Validate and read input file
    if (!inputFile) {
      throw new Error('Input file path is required');
    }

    const guide = readInputFile(inputFile);
    ensureOutputDirectory(finalOutputDir);

    // Process content
    const sections = extractSections(guide);
    let targetSections = Object.entries(sections);

    // Get available sections for error message
    const availableSections = getAvailableSections(sections);

    // Filter sections if not 'all'
    if (sectionFilter.toLowerCase() !== 'all') {
      const filterLower = sectionFilter.toLowerCase();
      targetSections = targetSections.filter(([name]) => {
        const nameLower = name.toLowerCase();
        return (
          nameLower === filterLower ||
          nameLower === `${filterLower} guidelines` ||
          nameLower.startsWith(`${filterLower} `)
        );
      });

      if (targetSections.length === 0) {
        throw new Error(
          `No section found matching: "${sectionFilter}". ` +
            `Available sections: ${availableSections.join(', ') || 'none'}`,
        );
      }
    } else {
      // Default filter for when 'all' is specified
      targetSections = targetSections.filter(([name]) => availableSections.includes(name));
    }

    if (targetSections.length === 0) {
      console.warn(
        'Warning: No "Base Guidelines", "Typescript Guidelines", "React Guidelines" or "Style Guidelines" sections found in the input file',
      );
      return;
    }

    // Process each target section
    let totalProcessed = 0;
    let totalSections = 0;

    for (const [sectionName, content] of targetSections) {
      try {
        console.log(`\nProcessing ${sectionName} section...`);
        const count = processSection(content, finalOutputDir, { ide });
        totalProcessed += count;
        totalSections++;
      } catch (error) {
        console.error(`Error: Error processing section "${sectionName}": ${error.message}`);
        // Continue with next section instead of exiting
      }
    }

    // Show summary
    if (totalSections > 0) {
      console.log('\n' + '='.repeat(80));
      console.log(`Rule extraction completed for ${ide} format in ${finalOutputDir}`);
      console.log(`Total sections processed: ${totalSections}/${targetSections.length}`);
      console.log(`Total rules processed: ${totalProcessed}`);
      console.log('='.repeat(80) + '\n');
    } else {
      console.warn('Warning: No sections were processed successfully');
      process.exit(1);
    }
  } catch (error) {
    console.error(`Fatal error: ${error.message}`);
    if (error.stack) {
      console.error('\nStack trace:');
      console.error(error.stack.split('\n').slice(1).join('\n'));
    }
    process.exit(1);
  }
}

// Run the script
if (import.meta.url.endsWith('/scripts/extract-rules.js')) {
  main();
}
