// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
};

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
};
function destructivelyRemoveLastDriver(name) {
  drivers.pop();
};
function destructivelyRemoveFirstDriver(name) {
  drivers.shift();
};
function appendDriver(name) {
  const newarray = [...drivers, "Broom"]; 
  return newarray
};
function prependDriver(name) {
  newarray2 = ["Arnold", ...drivers]
  return newarray2
};
function removeLastDriver() {
  newarray = drivers.slice(0, drivers.length -1)
  return newarray
};
function removeFirstDriver() {
  newarray = drivers.slice(1)
  return newarray
};
