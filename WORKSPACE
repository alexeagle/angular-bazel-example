workspace(name = "angular_bazel_example")

git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/thelgevold/rules_nodejs.git",
    commit = "adcd7d2f21256dddb583f5df129543a575c96218",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "npm_install")
node_repositories(package_json = ["//:package.json"])

git_repository(
    name = "build_bazel_rules_typescript",
    remote = "https://github.com/bazelbuild/rules_typescript.git",
    commit = "596bd0d16d9957d34a6447843dd98fb74bb75b1c",
)

load("@build_bazel_rules_typescript//:setup.bzl", "ts_setup_workspace")

ts_setup_workspace()

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


npm_install(
    name = "angular_bazel_example_prod_deps",
    package_json = "//:package.prodserver.json",
)

git_repository(
    name = "io_bazel_rules_docker",
    remote = "https://github.com/bazelbuild/rules_docker.git",
    commit = "766df456abcad45534bea51fa4e628cac24badf6",
)
load(
    "@io_bazel_rules_docker//nodejs:image.bzl",
    _nodejs_image_repos = "repositories",
)

_nodejs_image_repos()

git_repository(
    name = "io_bazel_rules_k8s",
    commit = "055db1f75e00e805762798bbb14afb945955f5c1",
    remote = "https://github.com/bazelbuild/rules_k8s.git",
)

####################################################
# Kubernetes setup, for deployment to Google Cloud #
####################################################

load("@io_bazel_rules_k8s//k8s:k8s.bzl", "k8s_repositories", "k8s_defaults")
k8s_repositories()
k8s_defaults(
  name = "k8s_deploy",
  kind = "deployment",
  cluster = "gke_angular2-automation_us-west1-a_angular-bazel-example",
  #image_chroot = "us.gcr.io/angular2-automation-angular-bazel-example/dev",
)
