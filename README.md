# setup-logtalk

This actions sets up a Logtalk environment for use in workflows. It also makes available third-party software that are used by or together with the developer tools (notably, `xsltproc`, Graphviz, and Sphinx).

![](https://github.com/logtalk-actions/setup-logtalk/workflows/Test/badge.svg)

# Usage

See [action.yml](action.yml). The valid values for `logtalk-version` are `latest` (stable version; default), `git` (current git master branch version), and a specific version (e.g. `3.31.0`).

# Example

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
          logtalk-version: 3.31.0
      - name: Checkout Logtalk application to be tested
        uses: actions/checkout@v1
      - name: Run all tests in the application directory
        run: logtalk_tester
```

# License

The scripts and documentation in this project are released under the [Apache License 2.0](LICENSE).

# Current Status

This action is in active development. This action does not support Windows at this time.
