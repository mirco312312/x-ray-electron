// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: "./build/index.js",
  output: {
    file: "./dist/app.js",
    format: "cjs", // Type of output (amd, cjs, es, iife, umd)
    sourcemap: true
  }, 
  plugins: [
    resolve({
      jail: "./build"
    }),
    commonjs()
  ]
};