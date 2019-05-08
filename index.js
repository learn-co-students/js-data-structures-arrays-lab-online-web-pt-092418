// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name) {
 drivers.push(name)
}
function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver() {
  drivers.pop()
}
function destructivelyRemoveFirstDriver() {
  drivers.shift()
}
function appendDriver(name) {
  let newdrivers = [...drivers, name]
  return newdrivers
}
function prependDriver(name) {
  let newdrivers = [name, ...drivers]
  return newdrivers
}
function removeLastDriver() {
  let newdrivers = drivers.slice()
  newdrivers.pop()
  return newdrivers
}
function removeFirstDriver() {
  let newdrivers = drivers.slice()
  newdrivers.shift()
  return newdrivers
}
