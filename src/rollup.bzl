def _rollup(ctx):

  baseFolder = "{0}/rollup.runfiles/{1}".format(ctx.executable.rollup.dirname, ctx.workspace_name)

  rollupConfig = "{0}/rollup.config.js".format(baseFolder)
  entryPoint = "{0}/src/bazel-out/host/bin/src/{1}".format(baseFolder, ctx.attr.entry_point)

  args = ["--config", rollupConfig]
  args += ["--output.file", ctx.outputs.build_es6.path]
  args += ["--input", entryPoint]

  ctx.action(
      executable = ctx.executable.rollup,
      outputs = [ctx.outputs.build_es6],
      arguments = args
  )

  argsTS = ["--target", "es5"]
  argsTS += ["--allowJS"]
  argsTS += [ctx.outputs.build_es6.path]
  argsTS += ["--outFile", ctx.outputs.build_es5.path]

  ctx.action(
      executable = ctx.executable.typescript,
      inputs = [ctx.outputs.build_es6],
      outputs = [ctx.outputs.build_es5],
      arguments = argsTS
  )

  argsUglify = [ctx.outputs.build_es5.path]
  argsUglify += ["--output", ctx.outputs.build_es5_min.path]

  ctx.action(
      executable = ctx.executable.uglify,
      inputs = [ctx.outputs.build_es5],
      outputs = [ctx.outputs.build_es5_min],
      arguments = argsUglify
  )

  return struct()

rollup = rule(
    implementation = _rollup,
    attrs = {
        "entry_point": attr.string(mandatory=True),
        "rollup": attr.label(default=Label("//src:rollup"), executable=True, cfg="host", allow_files=True),
        "typescript": attr.label(default=Label("//src:es5"), executable=True, cfg="host", allow_files=True),
        "uglify": attr.label(default=Label("//src:uglify"), executable=True, cfg="host", allow_files=True)
    },
    outputs = {
        "build_es6": "%{name}.es6.js",
        "build_es5": "%{name}.js",
        "build_es5_min": "%{name}.min.js"
    }
)