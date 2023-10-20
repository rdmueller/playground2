import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'node_modules/@stevebel/png/lib/decode/index.js',
  output: {
    dir: 'lib',
    format: 'iife',
    name: "decode"
  },
  plugins: [nodeResolve()]
};
