// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name) {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name) {
  drivers.shift(name);
}

function appendDriver(name) {
  let appendDriver = [...drivers, name];
  return appendDriver;
}

function prependDriver(name) {
  let prependDriver = [name, ...drivers];
  return prependDriver;
}

function removeLastDriver() {
  let removeLastDriver = drivers.slice(0, drivers.length-1);
  return removeLastDriver;
}

function removeFirstDriver() {
  return drivers.slice(1);

}
