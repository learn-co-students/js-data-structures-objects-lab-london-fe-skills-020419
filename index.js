// Write your solution in this file!
const driver =
{ driver: "driver" };
function updateDriverWithKeyAndValue(driver, name, address) {
  const newDriver = {...driver }
  newDriver[name] = address;
  return newDriver;
}
function destructivelyUpdateDriverWithKeyAndValue(driver, name, address) {
  driver[name] = address;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  let newDriver = Object.assign({},driver);
  return delete newDriver[key];
}
function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];
}