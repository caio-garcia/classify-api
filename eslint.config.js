module.exports = [
   { files: ['**/*.{js,mjs,cjs,ts}'] },
   { ignores: ['coverage/*', 'node_modules/*'] },
   {
     rules: {
       'no-unused-vars': 'warn',
       quotes: [2, 'single'],
     },
   },
 ];
