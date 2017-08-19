"use strict";

module.exports = {
  comboPatterns: [
    // basics
    "readme*",
    ".npmignore",
    "*license*",
    "*licence*",
    "history.md",
    "history.markdown",
    "history",
    ".gitattributes",
    ".gitmodules",
    ".travis.yml",
    "binding.gyp",
    "contributing*",
    "component.json",
    "composer.json",
    "makefile*",
    "gemfile*",
    "rakefile*",
    ".coveralls.yml",
    "example*",
    "changelog*",
    "changes",
    ".jshintrc",
    "bower.json",
    "*appveyor.yml",
    "*.log",
    "*.tlog",
    "*.patch",
    ".gitignore",
    ".sauce-labs*",
    ".vimrc*",
    ".idea",
    "examples",
    "samples",
    "test",
    "tests",
    "draft-00",
    "draft-01",
    "draft-02",
    "draft-03",
    "draft-04",
    ".eslintrc",
    ".jamignore",
    ".jscsrc",
    "*.todo",
    "*.md",
    "*.markdown",
    "*.js.map",
    "contributors",
    "*.orig",
    "*.rej",
    ".zuul.yml",
    ".editorconfig",
    ".npmrc",
    ".jshintignore",
    ".eslintignore",
    ".lint",
    ".lintignore",
    "cakefile",
    ".istanbul.yml",
    "authors",
    "hyper-schema",
    "mocha.opts",
    ".gradle",
    ".tern-port",
    ".gitkeep",
    ".dntrc",
    "*.watchr",
    ".jsbeautifyrc",
    "cname",
    "screenshots",
    ".dir-locals.el",
    "jsl.conf",
    "jsstyle",
    "benchmark",
    "dockerfile",
    "*.nuspec",
    "*.csproj",
    "thumbs.db",
    ".ds_store",
    "desktop.ini",
    "npm-debug.log",
    "wercker.yml",
    ".flowconfig",

    // images
    "*.png",
    "*.gif",
    "*.jpg",
    "*.html",

    // fonts
    "*.eot",
    "*.ttf",
    "*.woff",
    "*.ico",

    // sources
    "*.js.gz",
    "*.json~",
    "*.txt",
    "*.sh",
    "*.gnu",
    "*.jar",
    "*.bat",
    "*.gyp",
    "*.gypi",
    "*.h",
    "*.c",
    "*.cc",
    "*.cpp",
    "*.hpp",
    "*.lzz",
    "*.coffee",
    "*.ts",
    "*.tsx",

    // typescript typings
    "*.d.ts",
    "@types",

    ".bin",
    "*.min.js",
    "test.js",
    "*.test.js",
    "gruntfile.js",
    "gulpfile.js",
    "*.sh",
    "*.bat",
    "*.cmd",
    "*.ps1",
    "*.map",
    "images",
    "semver",
    "link",
    "links",
    "uglifyjs",

    //////////////////////////////////
    // specific modules
    //////////////////////////////////

    // only used to build better-sqlite3
    "lzz-gyp",

    // build artifacts for gyp modules (.node files are elsewhere)
    "global_intermediate",
    "action_before_build",
    "*.sln",
    "*.pdb",
    "*.obj",
    "*.lib",
    "*.vcxproj*",
    "*.py",
    "bin",

    // useless dist builds and/or docs
    "*.tar.gz",
    "demo",
    "docs",
    "docs-theme", // polished, for example
    "umd",
    "amd",
    ".publish", // wtf react-select
    "flow-typed",
    "_book",
    ".bin",
    "uglifyjs",
    "fsevents",
  ],

  // see `release/list-bad-dists.js` to generate that automatically
  fullPatterns: [
    "async/dist",
    "element-resize-detector/dist",
    "handlebars/dist",
    "math-expression-evaluator/dist",
    "polished/dist",
    "react/dist",
    "react-dom/dist",
    "react-input-autosize/dist",
    "react-intl/dist",
    "react-modal/dist",
    "react-redux/dist",
    "redux/dist",
    "redux-logger/dist",
    "reselect/dist",
    "sprintf-js/dist",
    "styled-components/dist",
    "ua-parser-js/dist",

    "recharts/es6",
    "recharts/src",
    "styled-components/src",
    "knex/src",
  ],

  ignore: [],
};
