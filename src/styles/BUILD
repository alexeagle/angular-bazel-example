package(default_visibility = ["//visibility:public"])

load("@io_bazel_rules_sass//:defs.bzl", "sass_library")

sass_library(
    name = "colors",
    srcs = ["colors.scss"],
)

sass_library(
    name = "fonts",
    srcs = ["fonts.scss"],
)

sass_library(
    name = "shared",
    srcs = ["shared.scss"],
    deps = [
        ":colors",
        ":fonts",
    ],
)
