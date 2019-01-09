# pure-eval

<!-- badge -->
[![npm license](https://img.shields.io/npm/l/sramam/pure-eval)](https://www.npmjs.com/package/sramam/pure-eval)
[![travis status](https://img.shields.io/travis/sramam/pure-eval.svg)](https://travis-ci.org/sramam/pure-eval)
[![Build status](https://ci.appveyor.com/api/projects/status/90am2usst4qeutgi?svg=true)](https://ci.appveyor.com/project/sramam/pure-eval)
[![Coverage Status](https://coveralls.io/repos/github/sramam/pure-eval/badge.svg?branch=master)](https://coveralls.io/github/sramam/pure-eval?branch=master)
[![David](https://david-dm.org/sramam/pure-eval/status.svg)](https://david-dm.org/sramam/pure-eval)
[![David](https://david-dm.org/sramam/pure-eval/dev-status.svg)](https://david-dm.org/sramam/pure-eval?type=dev)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/sramam/pure-eval.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/sramam/pure-eval/)
<!-- endbadge -->

A convenience wrapper around [vm2](https://github.com/patriksimek/vm2).
Evaluates untrusted code in a sandbox, while ensuring lack of side-effects.

## Usage

```bash
npm install https://github.com/sramam/pure-eval
```

```TypeScript
import { pureEval } from "pure-eval";

const K = 2;
const pureFn = (a, b) => a + b;
const impureFn = (a, b) => a + b + K;

// When a function is pure, returns result of evaluation
const result = pureEval(pureFn, 2, 3);   // = 5

// When a function is impure, throws an error
try {
  const result = pureEval(impureFn, 2, 3);
} catch (err) {
  // throws - K is not defined
  // deal with it.
}
```

## Development Tooling

- [Development tooling](./docs/DevTools.md)
- [Changelog](./CHANGELOG.md)

## License

[Apache-2.0](./LICENSE.md)

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## Support

Bugs, PRs, comments, suggestions welcomed!
