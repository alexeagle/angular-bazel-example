const rimraf = require('rimraf');
const { FEATURES } = require('./feature-names');
const { updateBuildFile } = require('./build-file');
const { updateNgModule, removeRoutesFromNgModule, removeRoutesFromAppComponentHtml } = require('./ng-module');

module.exports = function() {
  FEATURES.map(feature => `src/app/${feature.path}`).forEach(featPath => {
    console.log(`DELETE ${featPath}`);
    rimraf.sync(featPath);
  });

  updateBuildFile('src/app/BUILD.bazel', {mappedFeatureList: []});
  updateBuildFile('src/BUILD.bazel', {mappedFeatureList: []});
  updateNgModule('src/app/app.module.ts');
  removeRoutesFromNgModule('src/app/app-routing.module.ts');
  removeRoutesFromAppComponentHtml('src/app/app.component.html');
}