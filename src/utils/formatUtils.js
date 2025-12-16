import { snakeCase, camelCase } from 'lodash';

// doesn't format nested keys
export function convertKeysToSnakeCase(obj) {
  if (!obj || Array.isArray(obj)) return obj;
  const newObj = {};
  try {
    Object.keys(obj).forEach((key) => {
      newObj[snakeCase(key)] = obj[key];
    });
  } catch {
    return obj;
  }
  return newObj;
}

// doesn't format nested keys
export function convertKeysToCamelCase(obj) {
  if (!obj || Array.isArray(obj)) return obj;
  const newObj = {};
  try {
    Object.keys(obj).forEach((key) => {
      newObj[camelCase(key)] = obj[key];
    });
  } catch {
    return obj;
  }
  return newObj;
}
