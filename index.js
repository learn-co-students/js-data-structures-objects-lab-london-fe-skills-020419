// Write your solution in this file!
const driver = 
{ driver: 'driver' };

function updateDriverWithKeyAndValue(driver, key, value) {
  const updatedDriver = { ...driver };
  updatedDriver[key] = value;
  return updatedDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const deleteDriver = { ...driver };
  delete deleteDriver[key];
  return deleteDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver
}