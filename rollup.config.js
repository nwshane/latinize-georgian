// rollup.config.js
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    resolve(),
    json(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  dest: 'lib/index.js'
}
