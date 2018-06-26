import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import transfer from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof transfer, 'function')
  },
  async 'calls package without error'() {
    await transfer()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await transfer({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T
