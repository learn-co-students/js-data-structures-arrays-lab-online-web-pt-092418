const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name)
}

function appendDriver(name) {
  let newDrivers = [...drivers, name];
  return newDrivers
}

function prependDriver(name) {
  let newDrivers = [name, ...drivers];
  return newDrivers
}

function removeLastDriver(name){
  newDrivers = drivers.slice(0);
  newDrivers.pop()

  return newDrivers;
}
function removeFirstDriver(name){
  newDrivers = drivers.slice(0);
  newDrivers.shift()

  return newDrivers;
}
