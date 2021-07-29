export function getFromLS(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.log("Error in getFromLS:", error);
    return false;
  }
}

export function setInLS(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    console.log("Error in setInLS:", error);
    return false;
  }
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
