import { debuglog } from 'util'

const LOG = debuglog('transfer')

/**
 * Update the maintainer's information for npm packages.
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */
export default async function transfer(config = {}) {
  const {
    type,
  } = config
  LOG('transfer called with %s', type)
  return type
}

/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
