workspace(name = "angular_bazel_example")

git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
    tag = "0.3.1",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")
node_repositories(package_json = ["//:package.json"])

git_repository(
    name = "build_bazel_rules_typescript",
    remote = "https://github.com/bazelbuild/rules_typescript.git",
    tag = "0.6.1",
)

load("@build_bazel_rules_typescript//:defs.bzl", "ts_repositories")

ts_repositories()

local_repository(
    name = "angular",
    path = "node_modules/@angular/bazel",
)

local_repository(
    name = "rxjs",
    path = "node_modules/rxjs/src",
)

git_repository(
    name = "io_bazel_rules_sass",
    remote = "https://github.com/bazelbuild/rules_sass.git",
    tag = "0.0.3",
)

load("@io_bazel_rules_sass//sass:sass.bzl", "sass_repositories")

sass_repositories()

git_repository(
    name = "com_github_bazelbuild_buildtools",
    remote = "https://github.com/bazelbuild/buildtools.git",
    # Note, this commit matches the version of buildifier in angular/ngcontainer
    commit = "b3b620e8bcff18ed3378cd3f35ebeb7016d71f71",
)

http_archive(
    name = "io_bazel_rules_go",
    url = "https://github.com/bazelbuild/rules_go/releases/download/0.8.1/rules_go-0.8.1.tar.gz",
    sha256 = "90bb270d0a92ed5c83558b2797346917c46547f6f7103e648941ecdb6b9d0e72",
)


load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()

go_register_toolchains()
