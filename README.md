# `setup-logtalk`

This actions sets up a Logtalk environment for use in workflows. This action defines the `LOGTALKHOME` and `LOGTALKUSER` environment variables for followup steps in a workflow. It also makes available by default third-party software that are used by or together with some of the developer tools.

![](https://github.com/logtalk-actions/setup-logtalk/workflows/Test/badge.svg)

## Usage

See [action.yml](action.yml) for the action metadata. The valid values for the required `logtalk-version` input parameter are `latest` (stable version; default), `git` (current git master branch version), and a specific version (e.g. `3.31.0`). The optional `logtalk-tool-dependencies` boolean input parameter (`true` by default) controls installation of third-party software required by some of the Logtalk tools (notably, [Graphviz](https://www.graphviz.org), [Sphinx](https://www.sphinx-doc.org/en/master/), `xsltproc`, and [`xunit-viewer`](https://www.npmjs.com/package/xunit-viewer) for use with the `diagrams`, `lgtdoc`, and `lgtunit` tools).

## Examples

### Setup with GNU Prolog backend

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

### Setup with SWI-Prolog backend

```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Install SWI-Prolog backend
        uses: logtalk-actions/setup-swi-prolog@master
        with:
          swi-prolog-branch: stable
          swi-prolog-version: latest
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: logtalk_tester -p swi
```

### Setup with ECliPSe backend with no Logtalk tool dependencies
```yml
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Install ECliPSe backend
        uses: logtalk-actions/setup-eclipse@master
        with:
          eclipse-version: latest
      - name: Install Logtalk
        uses: logtalk-actions/setup-logtalk@master
        with:
          logtalk-version: latest
          logtalk-tool-dependencies: false
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: logtalk_tester -p eclipse
```

## License

This project is released under the [Apache License 2.0](LICENSE).

## Current Status

This action is in active development. This action does not support Windows at this time.
