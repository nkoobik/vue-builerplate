import validate from 'lib/utils/validate';

const COMPLEX_DATA_TYPES = ['object', 'function'];

export function arraysEqual(first, second) {
  if (first === second) return true;
  if (first === null || second === null) return false;
  if (first.length !== second.length) return false;

  for (let i = 0; i < first.length; ++i) {
    if (first[i] !== second[i]) return false;
  }

  return true;
}

export function arraysWithSameElements(first, second) {
  if (first === second) return true;
  if (first === null || second === null) return false;
  if (first.length !== second.length) return false;

  for (let i = 0; i < first.length; ++i) {
    if (!second.includes(first[i])) return false;
  }
  return true;
}

export function getUniqueArrayValues(array) {
  const isComplexDataTypeValues = validate.isNotEmptyArray(array) && COMPLEX_DATA_TYPES.includes(typeof array[0]);

  if (isComplexDataTypeValues) {
    return Array.from(new Set(array.map(JSON.stringify)), JSON.parse);
  }

  return [...new Set(array)];
}
