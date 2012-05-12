identifier
==========

Generate random javascript identifiers.

This is probably only useful if you're doing hackish tricks involving AST
transforms or whatevers.

[![build status](https://secure.travis-ci.org/substack/node-identifier.png)](http://travis-ci.org/substack/node-identifier)

example
=======

``` js
var identifier = require('identifier');
var name = identifier(16);
console.log(name);
```

output:

```
KAUfaA66_BYii1Oq
```

methods
=======

``` js
var identifier = require('identifier')
```

identifier(n)
-------------

Return a valid javascript identifier string `n` characters long.

install
=======

With [npm](http://npmjs.org) do:

```
npm install identifier
```

license
=======

MIT
