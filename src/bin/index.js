import { ok } from 'assert'
import spawn from 'spawncommand'
import { resolve } from 'path'
const { name } = require(resolve(process.cwd(), './package.json'))

const cwd = resolve(__dirname, '../..')

const ls = async () => {
  const { promise: p } = spawn('npm', [
    'owner',
    'ls',
  ], {
    stdio: 'inherit',
  })
  await p
}

;(async () => {
  await ls()
  const { promise } = spawn('npm', [
    'owner',
    'add',
    'artdecocode',
  ])
  const { stdout } = await promise
  ok(stdout.startsWith('+ artdecocode'), 'Expected to add a user')

  const { promise: p2 } = spawn('npm', [
    'owner',
    'rm',
    'zvr',
    name,
  ], {
    cwd,
  })
  const { stdout: s2, stderr: e2 } = await p2
  console.log(s2, e2)

  const { promise: p3 } = spawn('npm', [
    'owner',
    'add',
    'zvr',
    name,
  ], {
    cwd,
  })
  const { stdout: s3, stderr: e3 } = await p3
  console.log(s3, e3)

  const { promise: p4 } = spawn('npm', [
    'owner',
    'rm',
    'artdecocode',
    name,
  ])
  const { stdout: s4, stderr: e4 } = await p4
  console.log(s4, e4)

  await ls()
})()
