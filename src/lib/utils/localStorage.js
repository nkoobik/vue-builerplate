export function getLocalStorageDataByKey(key) {
  return localStorage.getItem(key);
}

export function setLocalStorageData(key, value) {
  return localStorage.setItem(key, value);
}

export function removeLocalStorageData(key) {
  return localStorage.removeItem(key);
}
