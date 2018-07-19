"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ls = exports.removeOwner = exports.addOwner = void 0;

var _assert = require("assert");

var _spawncommand = _interopRequireDefault(require("spawncommand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const addOwner = async (owner, pck) => {
  const {
    promise
  } = (0, _spawncommand.default)('npm', ['owner', 'add', owner, pck]);
  const {
    stdout,
    stderr
  } = await promise;
  (0, _assert.ok)(stdout.startsWith(`+ ${owner}`), stdout || stderr);
  return stdout;
};

exports.addOwner = addOwner;

const removeOwner = async (owner, pck, cwd) => {
  const {
    promise
  } = (0, _spawncommand.default)('npm', ['owner', 'remove', owner, pck], {
    cwd
  });
  const {
    stdout,
    stderr
  } = await promise;
  (0, _assert.ok)(stdout.startsWith(`- ${owner}`), stdout || stderr);
  return stdout;
};

exports.removeOwner = removeOwner;

const ls = async () => {
  const {
    promise
  } = (0, _spawncommand.default)('npm', ['owner', 'ls'], {
    stdio: 'inherit'
  });
  const {
    stdout
  } = await promise;
  return stdout;
};

exports.ls = ls;
//# sourceMappingURL=lib.js.map