# setup-logtalk

This actions sets up a Logtalk environment for use in workflows. It also makes available third-party software that are used by or together with the developer tools (notably, `xsltproc`, Graphviz, and Sphinx).

![](https://github.com/logtalk-actions/setup-logtalk/workflows/Test/badge.svg)

# Usage

See [action.yml](action.yml). The valid values for `logtalk-version` are `latest` (stable version; default), `git` (current git master branch version), and a specific version (e.g. `3.31.0`). The `logtalk-tool-dependencies` boolean option (true by default) controls installation of third-party software required by some of the Logtalk tools (notably, Graphviz, Sphinx, and `xsltproc`  for use with the `diagrams`, `lgtdoc`, and `lgtunit` tools).

# Examples

## Setup with GNU Prolog backend

```yml
on: push

jobs:
  test:
    runs-on: macOS-latest
    steps:
      - name: Install GNU Prolog backend
        uses: logtalk-actions/setup-gnu-prolog@master
        with:
          gprolog-version: latest
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: logtalk_tester -p gnu
```

## Setup with SWI-Prolog backend

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Install SWI-Prolog backend
        uses: logtalk-actions/setup-swi-prolog@master
        with:
          swipl-branch: stable
          swipl-version: latest
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: logtalk_tester -p swi
```

# License

This project is released under the [Apache License 2.0](LICENSE).

# Current Status

This action is in active development. This action does not support Windows at this time.
