const {createGlobPatternsForDependencies} = require('@nx/react/tailwind');
const {join} = require('path');
const theme = require('../../tailwind.preset.js');
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [theme],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
