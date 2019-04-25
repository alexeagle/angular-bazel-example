
const { makeFeatureModule } = require('./create-feature-module');
const { updateBuildFile } = require('./build-file');
const { updateRoutesInAppComponentHtml, updateRoutesInNgModule } = require('./ng-module');
const { FEATURES } = require('./feature-names');

module.exports = function(argv) {
  // Create all feature modules and update BUILD files
  FEATURES.forEach(makeFeatureModule(argv));

  // Update src/app/BUILD file and reference all the feature modules
  updateBuildFile(
      'src/app/BUILD.bazel',
      {mappedFeatureList: FEATURES.map(_feature => `"//src/app/${_feature.path}"`)});

  // Update src/BUILD file and reference all the feature ngfactories
  updateBuildFile('src/BUILD.bazel', {
    mappedFeatureList:
        FEATURES.map(_feature => `"src/app/${_feature.path}/${_feature.path}.module.ngfactory"`)
  });

  // Update routing module with routes definition
  updateRoutesInNgModule(
      `src/app/app-routing.module.ts`, {routes: FEATURES.map(_feature => _feature.path)});

  // Update src/app/app.component.html with links to the new generated modules
  updateRoutesInAppComponentHtml('src/app/app.component.html', {features: FEATURES});
}