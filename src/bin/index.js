#!/usr/bin/env node
import { addOwner, removeOwner } from '../lib'
import { resolve } from 'path'

const newOwner = 'artdecocode'

let name
try {
  const p = resolve(process.cwd(), 'package.json')
  ;({ name } = require(p))
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
