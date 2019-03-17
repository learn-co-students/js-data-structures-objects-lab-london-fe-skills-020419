// Write your solution in this file!


const driver = {
  
}

function updateDriverWithKeyAndValue(driver, key, value){
  const newUpdateDriver = {...driver};
  newUpdateDriver [key] = value;
  return newUpdateDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   driver [key] = value;
   return driver
  
}

function deleteFromDriverByKey(driver, key){
   let newdriver = Object.assign({},driver)
   return delete newdriver [key];
  
}

function destructivelyDeleteFromDriverByKey(driver, key){
  return delete driver [key];
  
}
