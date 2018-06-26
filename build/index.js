"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transfer;

var _util = require("util");

const LOG = (0, _util.debuglog)('transfer');
/**
 * Update the maintainer's information for npm packages.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function transfer(config = {}) {
  const {
    type
  } = config;
  LOG('transfer called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map