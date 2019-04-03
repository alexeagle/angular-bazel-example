/**
 * Generate lots of "feature" code to bulk out this example to a given size.
 * By default we generate 90 components and check that in.
 * You can generate more by passing arguments, for example
 * yarn generate 10 10
 * will make 1000 components total: for each of the ten "features", it will have 10 modules, each
 * has 10 components.
 */
const {spawnSync} = require('child_process');
const fs = require('fs');

const featureNames = [
  'billing',
  'compute',
  'datastore',
  'functions',
  'logging',
  'monitoring',
  'networking',
  'registry',
  'storage',
  'support',
];

const modulesPerFeature = process.argv[2] || 3;
const componentsPerModule = process.argv[3] || 3;
let globalCmpIdx = 0;

function ng(...args) {
  spawnSync('ng', args, {stdio: 'inherit'});
}

function makeFeatureModule(name) {
  ng('generate', 'module', name, '--module', 'app');
  ng('generate', 'component', `${name}/index`, '--module', `${name}`, '--inlineStyle=true');

  const featureModuleDeps = [];
  const selectorAcc = [];

  for (let modIdx = 0; modIdx < modulesPerFeature; modIdx++) {
    ng('generate', 'module', `${name}/module${modIdx}`, '--module', name);

    featureModuleDeps.push(`//src/app/${name}/module${modIdx}`);
    const tsFileAcc = [];
    const scssFileAcc = [];
    const htmlFileAcc = [];

    for (let cmpIdx = 0; cmpIdx < componentsPerModule; cmpIdx++) {
      ng('generate', 'component', `${name}/module${modIdx}/cmp${globalCmpIdx}`, '--module',
         `${name}/module${modIdx}`, '--export=true');
      tsFileAcc.push(`cmp${globalCmpIdx}/cmp${globalCmpIdx}.component.ts`);
      scssFileAcc.push(`cmp${globalCmpIdx}/cmp${globalCmpIdx}.component.scss`);
      htmlFileAcc.push(`cmp${globalCmpIdx}/cmp${globalCmpIdx}.component.html`);
      selectorAcc.push(`app-cmp${globalCmpIdx}`);
      globalCmpIdx++;
    }
    fs.writeFileSync(`src/app/${name}/module${modIdx}/BUILD.bazel`, `
# Generated BUILD file, see /tools/generate.js
load("@npm_angular_bazel//:index.bzl", "ng_module")
load("@npm_bazel_karma//:defs.bzl", "ts_web_test_suite")
load("@npm_bazel_typescript//:defs.bzl", "ts_library")
load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")

package(default_visibility = ["//:__subpackages__"])

${scssFileAcc.map((s, idx) => `
sass_binary(
    name = "module${idx}_styles",
    src = "${s}",
)`).join('\n\n')}

ng_module(
    name = "module${modIdx}",
    srcs = [
        "module${modIdx}.module.ts",
        ${tsFileAcc.map(s => `"${s}"`).join(',\n        ')}
    ],
    assets = [
        ${scssFileAcc.map((_, idx) => `":module${idx}_styles"`).join(`,\n        `)},
        ${htmlFileAcc.map(s => `"${s}"`).join(',\n        ')}
    ],
    tsconfig = "//src:tsconfig.json",
    deps = [
        "@npm//@angular/common",
        "@npm//@angular/core",
    ],
)

ts_library(
    name = "test_lib",
    testonly = 1,
    srcs = glob(["**/*.spec.ts"]),
    tsconfig = "//src:tsconfig-test",
    deps = [
        ":module${modIdx}",
        "@npm//@angular/core",
        "@npm//@angular/platform-browser",
        "@npm//@angular/platform-browser-dynamic",
        "@npm//@types/jasmine",
        "@npm//@types/node",
    ],
)

ts_web_test_suite(
    name = "test",
    srcs = [
        "@npm//node_modules/@angular/common:bundles/common.umd.js",
        "@npm//node_modules/@angular/common:bundles/common-http.umd.js",
        "@npm//node_modules/@angular/common:common.ngsummary.js",
        "@npm//node_modules/@angular/compiler:bundles/compiler.umd.js",
        "@npm//node_modules/@angular/compiler:bundles/compiler-testing.umd.js",
        "@npm//node_modules/@angular/core:bundles/core.umd.js",
        "@npm//node_modules/@angular/core:bundles/core-testing.umd.js",
        "@npm//node_modules/@angular/platform-browser:bundles/platform-browser.umd.js",
        "@npm//node_modules/@angular/platform-browser:bundles/platform-browser-testing.umd.js",
        "@npm//node_modules/@angular/platform-browser-dynamic:bundles/platform-browser-dynamic.umd.js",
        "@npm//node_modules/@angular/platform-browser-dynamic:bundles/platform-browser-dynamic-testing.umd.js",
        "@npm//node_modules/tslib:tslib.js",
    ],
    runtime_deps = [
        "//src:initialize_testbed",
    ],
    # do not sort
    bootstrap = [
        "@npm//node_modules/zone.js:dist/zone-testing-bundle.js",
        "@npm//node_modules/reflect-metadata:Reflect.js",
    ],
    browsers = [
        "@io_bazel_rules_webtesting//browsers:chromium-local",
        # TODO(gregmagolan): re-enable firefox testing once fixed
        # See https://github.com/bazelbuild/rules_typescript/issues/296
        #"@io_bazel_rules_webtesting//browsers:firefox-local",
    ],
    deps = [
        ":test_lib",
        "//src:rxjs_umd_modules",
    ],
)
        `);
  }
  fs.writeFileSync(
      `src/app/${name}/index/index.component.html`,
      selectorAcc.map(s => `<${s}></${s}>`).join('\n'));
  const originalFeatureModuleContent =
      fs.readFileSync(`src/app/${name}/${name}.module.ts`, {encoding: 'utf-8'});
  fs.writeFileSync(
      `src/app/${name}/${name}.module.ts`,
      originalFeatureModuleContent
          .replace('CommonModule,', `CommonModule,
RouterModule.forChild([{path: '', component: IndexComponent}]),`)
          .replace(
              `from '@angular/common';`,
              `from '@angular/common';\nimport { RouterModule } from '@angular/router';`));

  fs.writeFileSync(`src/app/${name}/BUILD.bazel`, `
# Generated BUILD file, see /tools/generate.js
load("@npm_angular_bazel//:index.bzl", "ng_module")

package(default_visibility = ["//:__subpackages__"])

ng_module(
    name = "${name}",
    srcs = [
        "index/index.component.ts",
        "${name}.module.ts",
    ],
    assets = [
        "index/index.component.html",
    ],
    tsconfig = "//src:tsconfig.json",
    deps = [
        "@npm//@angular/common",
        "@npm//@angular/core",
        "@npm//@angular/router",
        ${featureModuleDeps.map(s => `"${s}"`).join(',\n        ')}
    ],
)
    `);
}

featureNames.forEach(p => makeFeatureModule(p));
