load("@angular//:index.bzl", "ng_module")

package(default_visibility = ["//visibility:public"])

ng_module(
    name = "material",
    srcs = glob(["*.ts"]),
    tsconfig = "//src:tsconfig.json",
    deps = [
        "@angular//packages/core",
        "@angular_material//src/lib:material",
    ],
)
