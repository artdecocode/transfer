"use strict";

var _lib = require("../lib");

const newOwner = 'artdecocode';
let name;

try {
  ({
    name
  } = require('./package.json'));
} catch (err) {
  console.log('Could not find name from the package.json');
  process.exit(1);
}

(async () => {
  const a = await (0, _lib.addOwner)(newOwner, name);
  console.log(a);
  const r = await (0, _lib.removeOwner)(newOwner, name);
  console.log(r);
})();
//# sourceMappingURL=index.js.map