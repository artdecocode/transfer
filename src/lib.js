import { ok } from 'assert'
import spawn from 'spawncommand'

export const addOwner = async (owner, pck) => {
  const { promise } = spawn('npm', [
    'owner',
    'add',
    owner,
    pck,
  ])
  const { stdout, stderr } = await promise
  ok(stdout.startsWith(`+ ${owner}`), stdout || stderr)
  return stdout
}

export const removeOwner = async (owner, pck, cwd) => {
  const { promise } = spawn('npm', [
    'owner',
    'remove',
    owner,
    pck,
  ], {
    cwd,
  })
  const { stdout, stderr } = await promise
  ok(stdout.startsWith(`- ${owner}`), stdout || stderr)
  return stdout
}

export const ls = async () => {
  const { promise } = spawn('npm', [
    'owner',
    'ls',
  ], {
    stdio: 'inherit',
  })
  const { stdout } = await promise
  return stdout
}
