# The WORKSPACE file tells Bazel that this directory is a "workspace", which is like a project root.
# The content of this file specifies all the external dependencies Bazel needs to perform a build.

####################################
# ESModule imports (and TypeScript imports) can be absolute starting with the workspace name.
# The name of the workspace should match the npm package where we publish, so that these
# imports also make sense when referencing the published package.
workspace(
    name = "angular_bazel_example",
    managed_directories = {"@npm": ["node_modules"]},
)

# These rules are built-into Bazel but we need to load them first to download more rules
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Fetch rules_nodejs so we can install our npm dependencies
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "e04a82a72146bfbca2d0575947daa60fda1878c8d3a3afe868a8ec39a6b968bb",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.31.1/rules_nodejs-0.31.1.tar.gz"],
)

# Fetch sass rules for compiling sass files
http_archive(
    name = "io_bazel_rules_sass",
    strip_prefix = "rules_sass-9a00e557c32ac0f26e5d3c66d1d17316874027b3",
    url = "https://github.com/bazelbuild/rules_sass/archive/9a00e557c32ac0f26e5d3c66d1d17316874027b3.zip",
)

# Check the bazel version and download npm dependencies
load("@build_bazel_rules_nodejs//:defs.bzl", "check_bazel_version", "yarn_install")

# Bazel version must be at least v0.21.0 because:
#   - 0.21.0 Using --incompatible_strict_action_env flag fixes cache when running `yarn bazel`
#            (see https://github.com/angular/angular/issues/27514#issuecomment-451438271)
check_bazel_version(
    message = """
You no longer need to install Bazel on your machine.
Angular has a dependency on the @bazel/bazel package which supplies it.
Try running `yarn bazel` instead.
    (If you did run that, check that you've got a fresh `yarn install`)

""",
    minimum_bazel_version = "0.26.0",
)

# Setup the Node.js toolchain & install our npm dependencies into @npm
yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

# Install all bazel dependencies of our npm packages
load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

# Load karma dependencies
load("@npm_bazel_karma//:package.bzl", "rules_karma_dependencies")

rules_karma_dependencies()

# Setup the rules_webtesting toolchain
load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")

web_test_repositories()

# Temporary work-around for https://github.com/angular/angular/issues/28681
# TODO(gregmagolan): go back to @io_bazel_rules_webtesting browser_repositories
load("@npm_bazel_karma//:browser_repositories.bzl", "browser_repositories")

browser_repositories()

# Setup the rules_typescript tooolchain
load("@npm_bazel_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

# Setup the rules_sass toolchain
load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()

################################
# Support for Remote Execution #
################################

http_archive(
    name = "bazel_toolchains",
    sha256 = "88e818f9f03628eef609c8429c210ecf265ffe46c2af095f36c7ef8b1855fef5",
    strip_prefix = "bazel-toolchains-92dd8a7",
    urls = [
        "https://github.com/bazelbuild/bazel-toolchains/archive/92dd8a7.zip",
    ],
)

####################################################
# Support creating Docker images for our node apps #
####################################################

http_archive(
    name = "io_bazel_rules_docker",
    sha256 = "87fc6a2b128147a0a3039a2fd0b53cc1f2ed5adb8716f50756544a572999ae9a",
    strip_prefix = "rules_docker-0.8.1",
    urls = ["https://github.com/bazelbuild/rules_docker/archive/v0.8.1.tar.gz"],
)

load("@io_bazel_rules_docker//nodejs:image.bzl", nodejs_image_repos = "repositories")

nodejs_image_repos()

####################################################
# Kubernetes setup, for deployment to Google Cloud #
####################################################

git_repository(
    name = "io_bazel_rules_k8s",
    commit = "905c2bc33e3d4a9a68743afec63c66d5560b360e",
    remote = "https://github.com/bazelbuild/rules_k8s.git",
    shallow_since = "1545317854 -0500",
)

load("@io_bazel_rules_k8s//k8s:k8s.bzl", "k8s_defaults", "k8s_repositories")

k8s_repositories()

k8s_defaults(
    # This creates a rule called "k8s_deploy" that we can call later
    name = "k8s_deploy",
    # This is the name of the cluster as it appears in:
    #   kubectl config view --minify -o=jsonpath='{.contexts[0].context.cluster}'
    cluster = "_".join([
        "gke",
        "internal-200822",
        "us-west1-a",
        "angular-bazel-example",
    ]),
    kind = "deployment",
)
