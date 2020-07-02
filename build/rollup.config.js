import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import json from 'rollup-plugin-json';
export default {
    input: 'src/wrapper.js', // Path relative to package.json
    output: {
        name: 'Emoji',
        exports: 'named',
    },
    plugins: [
        json({      
            // for tree-shaking, properties will be declared as
            // variables, using either `var` or `const`
            preferConst: true, // Default: false
            // specify indentation for the generated default export —
            // defaults to '\t'
            indent: '  ',
            // ignores indent and generates the smallest code
            compact: true, // Default: false
            // generate a named export for every property of the JSON object
            namedExports: true // Default: true
          }),
        commonjs(),
        vue({
            css: true, // Dynamically inject css as a <style> tag
            compileTemplate: true, // Explicitly convert template to render function
        }),
        buble(), // Transpile to ES5
    ],
};