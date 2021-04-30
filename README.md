# @impact-tools/git-branch-validator

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/labidiaymen/git-branch-validator/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@impact-tools/git-branch-validator.svg?style=flat)](https://www.npmjs.com/package/@impact-tools/git-branch-validator)
[![codecov](https://codecov.io/gh/labidiaymen/@impact-tools/git-branch-validator/branch/master/graph/badge.svg)](https://codecov.io/gh/labidiaymen/@impact-tools/git-branch-validator)


[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[snyk-image]: https://snyk.io/test/npm/@impact-tools/git-branch-validator/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/@impact-tools/git-branch-validator
[download-image]: https://img.shields.io/npm/dm/@impact-tools/git-branch-validator.svg?style=flat-square
[download-url]: https://npmjs.org/package/@impact-tools/git-branch-validator

Git branch name validator through hooks.

## Description

**@impact-tools/git-branch-validator** is git branch validator based on [Husky](https://github.com/typicode/husky), so make sure that your repository have installed husky (**version >= v1.0.0**) successfully.

<!--

Description here.

-->

## Install

```bash

$ npm i @impact-tools/git-branch-validator --save-dev

```

## Usage

**Configure hooks and pattern using package.json.**

"git-branch-validator" attribute in package.json is optional, we have set default pattern and errorMsg in project. But you can still defined them as you like.

```js

// {app_root}/package.json
{
  "husky": {
    "hooks": {
      "pre-push": "branch-validator"
    }
  },
  "git-branch-validator": {
    "pattern": "^(master|develop){1}$|^(feature|fix|hotfix|release)\/.+$",
    "errorMsg": "your error message",
    "sandbox" : "https://regex101.com/r/XXXXXX" // <-- optional
    "showPattern" : true // <-- optional
  }
}
```

**Default pattern: ^(master|develop){1}$|^(feature|fix|hotfix|release)\/.+$**

**Example:** `feature/test/pattern-test` would be passed.

**Avaliable patterns:**

- ^(feature|fix|hotfix|release)\/.+ - branch has to start with _feature/, fix/, release/ or hotfix/_

* (feature|release|hotfix)\/(JIRA-\d+) - it should look like _feature/JIRA-1234_

- (feature|release|hotfix)\/(JIRA-\d+\/)?[a-z-]+ - it should look like _feature/branch-name_ or include JIRA's code like _feature/JIRA-1234/branch-name_

**You can also configure hooks and pattern using `.git-branch-validatorrc`, `..git-branch-validatorrc.json` or `.git-branch-validatorrcrc.js` file.**

## Requirements

1. Husky requires Node `>= 8.6.0` and Git `>= 2.13.2`

2. Husky version `>= 1.0.0`

## License

[MIT](LICENSE)
