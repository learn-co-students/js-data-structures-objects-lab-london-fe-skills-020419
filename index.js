// Write your solution in this file!
const driver = {};

// need to create a function that takes in driver, key and value and returns a new driver that has an updated value for the key

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, name) {
  const newDriver = {...driver};
  delete newDriver.name;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, name) {
  delete driver.name;
  return driver;
}