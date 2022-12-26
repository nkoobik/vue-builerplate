export function deepCloneObject(object) {
  return JSON.parse(JSON.stringify(object));
}

export function getObjectPropertyByPath(obj, path) {
  for (let i=0, len=path.length; i<len; i++) {
    obj = obj[path[i]];
  }

  return obj;
}
