module.exports = {
  // Type check TypeScript files
  '{apps,packages}/**/*.(ts|tsx)': () => 'pnpm type-check',

  // Lint then format TypeScript and JavaScript files
  '{apps,packages}/**/*.(ts|tsx|js)': (filenames) => [
    `pnpm exec eslint --fix ${filenames.join(' ')}`,
    `pnpm exec prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '{apps,packages}/**/*.(md|json)': (filenames) =>
    `pnpm exec prettier --write ${filenames.join(' ')}`,
}
