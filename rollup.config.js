const rollup = require('rollup');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

const base = `${__dirname}/bazel-out/host/bin/src/bazel-out/host/bin/src`;

class NormalizePaths {
  resolveId(importee, importer) {
    const absolutePath = ['angular_bazel_example/src', 'src'];

    for (let i = 0; i < absolutePath.length; i++) {
      if (importee.startsWith(absolutePath[i])) {
        return `${base}${importee.replace(absolutePath[i], '')}.js`;
      }
    }
  }
}

export default {
  output: {format: 'iife'},

  plugins:
      [
        new NormalizePaths(),
        commonjs({include: `${__dirname}/node_modules/rxjs/**`}),
        nodeResolve({jsnext: true, module: true}),

      ]

}