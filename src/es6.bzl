load("@build_bazel_rules_nodejs//:internal/collect_es6_sources.bzl", "collect_es6_sources")

def _es6_consumer(ctx):
  sources = collect_es6_sources(ctx)
  
  return [DefaultInfo(
      files = sources,
      runfiles = ctx.runfiles(sources.to_list()),
  )]

es6 = rule(
    implementation = _es6_consumer,
    attrs = {
        "deps": attr.label_list()
    }
)
