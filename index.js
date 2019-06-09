const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
return [...drivers, name];
}

function prependDriver(name) {
return [name,...drivers];
}

function removeLastDriver() {
  let newDrivers = drivers.slice(0,2);
  return newDrivers;
}

function removeFirstDriver() {
  let newDrivers = drivers.slice(1);
  return newDrivers;
}
