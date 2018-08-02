# The WORKSPACE file tells Bazel that this directory is a "workspace", which is like a project root.
# The content of this file specifies all the external dependencies Bazel needs to perform a build.

####################################
# ESModule imports (and TypeScript imports) can be absolute starting with the workspace name.
# The name of the workspace should match the npm package where we publish, so that these
# imports also make sense when referencing the published package.
workspace(name = "angular_bazel_example")

####################################
# Fetch external repositories containing Bazel build toolchain support.
# Bazel doesn't support transitive WORKSPACE deps, so we must install those too.

# Allows Bazel to run tooling in Node.js
http_archive(
    name = "build_bazel_rules_nodejs",
    urls = ["https://github.com/bazelbuild/rules_nodejs/archive/0.11.2.zip"],
    strip_prefix = "rules_nodejs-0.11.2",
    sha256 = "c00d5381adeefb56e0ef959a7b168cae628535dab933cfad1c2cd1870cd7c9de",
)

# build_bazel_rules_nodejs depends on skylib
http_archive(
    name = "bazel_skylib",
    urls = ["https://github.com/bazelbuild/bazel-skylib/archive/0.3.1.zip"],
    strip_prefix = "bazel-skylib-0.3.1",
    sha256 = "95518adafc9a2b656667bbf517a952e54ce7f350779d0dd95133db4eb5c27fb1",
)

# The Bazel buildtools repo contains tools like the BUILD file formatter, buildifier
# This commit matches the version of buildifier in angular/ngcontainer
# If you change this, also check if it matches the version in the angular/ngcontainer
# version in /.circleci/config.yml
BAZEL_BUILDTOOLS_VERSION = "82b21607e00913b16fe1c51bec80232d9d6de31c"

http_archive(
    name = "com_github_bazelbuild_buildtools",
    url = "https://github.com/bazelbuild/buildtools/archive/%s.zip" % BAZEL_BUILDTOOLS_VERSION,
    strip_prefix = "buildtools-%s" % BAZEL_BUILDTOOLS_VERSION,
    sha256 = "edb24c2f9c55b10a820ec74db0564415c0cf553fa55e9fc709a6332fb6685eff",
)

# Runs the TypeScript compiler
http_archive(
    name = "build_bazel_rules_typescript",
    url = "https://github.com/bazelbuild/rules_typescript/archive/1d9a4b0087f307e31af91e2b221a6447288994c6.zip",
    strip_prefix = "rules_typescript-1d9a4b0087f307e31af91e2b221a6447288994c6",
    sha256 = "e17ac3f33d5d3cd2a0c385c4fd28b814d0ad46c6c67ccaef97160be99d7a24eb",
)

# Used by the ts_web_test_suite rule to provision browsers
http_archive(
    name = "io_bazel_rules_webtesting",
    # Use a commit SHA because we need a release
    # https://github.com/bazelbuild/rules_webtesting/issues/273
    url = "https://github.com/bazelbuild/rules_webtesting/archive/bbfc846d98dacb0fb40dd9173acfe4070e3e0f62.zip",
    strip_prefix = "rules_webtesting-bbfc846d98dacb0fb40dd9173acfe4070e3e0f62",
    sha256 = "a79e2d681b7c9ddc51e7974ddb385b9ee2b389cdc823dd3e78e18936337e4c5a",
)

# Runs the Sass CSS preprocessor
http_archive(
    name = "io_bazel_rules_sass",
    url = "https://github.com/bazelbuild/rules_sass/archive/0.1.0.zip",
    strip_prefix = "rules_sass-0.1.0",
    sha256 = "b243c4d64f054c174051785862ab079050d90b37a1cef7da93821c6981cb9ad4",
)

# Some of the TypeScript tooling is written in Go.
http_archive(
    name = "io_bazel_rules_go",
    url = "https://github.com/bazelbuild/rules_go/releases/download/0.13.0/rules_go-0.13.0.tar.gz",
    sha256 = "ba79c532ac400cefd1859cbc8a9829346aa69e3b99482cd5a54432092cbc3933",
)

####################################
# Tell Bazel about some workspaces that were installed from npm.

# The @angular repo contains rule for building Angular applications
local_repository(
    name = "angular",
    path = "node_modules/@angular/bazel",
)

# The @rxjs repo contains targets for building rxjs with bazel
local_repository(
    name = "rxjs",
    path = "node_modules/rxjs/src",
)

####################################
# Load and install our dependencies downloaded above.

load("@build_bazel_rules_nodejs//:defs.bzl", "check_bazel_version", "node_repositories", "yarn_install")

node_repositories(package_json = ["//:package.json"])

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()
go_register_toolchains()

load("@io_bazel_rules_webtesting//web:repositories.bzl", "browser_repositories", "web_test_repositories")

web_test_repositories()
browser_repositories(
    chromium = True,
    firefox = True,
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")

ts_setup_workspace()

load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")

sass_repositories()

####################################
# Setup our local toolchain

yarn_install(
    name = "history-server_runtime_deps",
    package_json = "//tools/history-server:package.json",
    yarn_lock = "//tools/history-server:yarn.lock",
)
