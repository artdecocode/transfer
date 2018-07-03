"use strict";

var _assert = require("assert");

var _spawncommand = _interopRequireDefault(require("spawncommand"));

var _path = require("path");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  name
} = require((0, _path.resolve)(process.cwd(), './package.json'));

const cwd = (0, _path.resolve)(__dirname, '../..');

const ls = async () => {
  const {
    promise: p
  } = (0, _spawncommand.default)('npm', ['owner', 'ls'], {
    stdio: 'inherit'
  });
  await p;
};

(async () => {
  await ls();
  const {
    promise
  } = (0, _spawncommand.default)('npm', ['owner', 'add', 'artdecocode']);
  const {
    stdout
  } = await promise;
  (0, _assert.ok)(stdout.startsWith('+ artdecocode'), 'Expected to add a user');
  const {
    promise: p2
  } = (0, _spawncommand.default)('npm', ['owner', 'rm', 'zvr', name], {
    cwd
  });
  const {
    stdout: s2,
    stderr: e2
  } = await p2;
  console.log(s2, e2);
  const {
    promise: p3
  } = (0, _spawncommand.default)('npm', ['owner', 'add', 'zvr', name], {
    cwd
  });
  const {
    stdout: s3,
    stderr: e3
  } = await p3;
  console.log(s3, e3);
  const {
    promise: p4
  } = (0, _spawncommand.default)('npm', ['owner', 'rm', 'artdecocode', name]);
  const {
    stdout: s4,
    stderr: e4
  } = await p4;
  console.log(s4, e4);
  await ls();
})();
//# sourceMappingURL=index.js.map