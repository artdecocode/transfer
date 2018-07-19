import { addOwner, removeOwner } from '../lib'

const newOwner = 'artdecocode'

let name
try {
  ({ name } = require('./package.json'))
} catch (err) {
  console.log('Could not find name from the package.json')
  process.exit(1)
}

(async () => {
  const a = await addOwner(newOwner, name)
  console.log(a)
  const r = await removeOwner(newOwner, name)
  console.log(r)
})()
