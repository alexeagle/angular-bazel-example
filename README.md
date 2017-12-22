[![CircleCI](https://circleci.com/gh/alexeagle/angular-bazel-example.svg?style=svg)](https://circleci.com/gh/alexeagle/angular-bazel-example)

# Example of building an Angular app with Bazel

**This is experimental! There may be breaking changes.**

This is part of the ABC project. The overall goal is to make it possible to
develop Angular applications the same way we do at Google.
See http://g.co/ng/abc for an overview.

You can read the documentation in the wiki of this repository to understand how
this works.

Follow https://github.com/angular/angular/issues/19058 for updates.

## Try it

First, we install packages as usual. However, to get the same version of node
and yarn as co-workers and our continuous integration, let's have Bazel run the
package manager using a pinned version it manages.

```bash
$ bazel run @yarn//:yarn
```

Next we'll run the development server. The `ibazel` command is a "watch mode"
for Bazel, which means it will watch any files that are inputs to the devserver,
and when they change it will ask Bazel to re-build them. The devserver stays
running, and when the re-build is finished, it will trigger the Livereload in
the browser.

```bash
$ ./node_modules/.bin/ibazel run src:devserver
```

This command prints a URL on the terminal. Open that page to see the demo app
running. Now you can edit one of the source files (`src/lib/file.ts` is an easy
one to understand and see the effect). As soon as you save a change, the app
should refresh in the browser with the new content. Our intent is that this time
is less than two seconds, even for a large application.

## Coming soon

Production bundling with https://github.com/bazelbuild/rules_closure/ is
underway, should be available Dec 2017 or Jan 2018

Code-splitting and lazy loading are planned for Q1 2018

Experimental Production bundling with Rollup:

```
npm run rollup
```

Test the bundled rollup application by running npm run lite

Run it under docker:

```
$ bazel run src:nodejs_image -- --norun
$ docker run --rm -p 3000:3000 -p 3001:3001 bazel/src:nodejs_image
```

Deploy to production:
```
# Install gcloud and kubectl
# Do the auth dance:
# https://github.com/bazelbuild/rules_docker#authorization
# Note: I had to build docker-credential-gcr from source because gcloud broke it
bazel run :deploy.replace
```

tips:
```
# Run the binary without docker
$ bazel run src:nodejs_image.binary

# What's in the image?
$ bazel build src:nodejs_image && file-roller dist/bin/src/nodejs_image-layer.tar

# Tear down all running docker containers
$ docker rm -f $(docker ps -aq)

# Hop into the running image on kubernetes
$ kubectl exec angular-bazel-example-prod-3285254973-ncv3g  -it -- /bin/bash
```