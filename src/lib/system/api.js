import axios from 'axios';
import { API_ROUTES } from 'lib/system/apiRoutes';

export async function requestApiGet({ route, getParams, errorCallback }) {
  try {
    return  await axios.get(API_ROUTES[route], { params: getParams });
  } catch (error) {
    errorCallback(error);
  }
}

export async function requestApiGetUnique({ uniqueKey, route, getParams, errorCallback }) {
  killRequest(uniqueKey);
  storeRequest(uniqueKey);

  try {
    return await axios.get(API_ROUTES[route], { params: getParams, signal: getRequest(uniqueKey) });
  } catch (error) {
    errorCallback(error);
  }
}

export async function requestApiPost({ route, getParams, postBody, errorCallback }) {
  try {
    return  await axios.post(API_ROUTES[route], postBody, { params: getParams });
  } catch (error) {
    errorCallback(error);
  }
}

export async function requestApiPostUnique({ uniqueKey, route, getParams, postBody, errorCallback }) {
  killRequest(uniqueKey);
  storeRequest(uniqueKey);

  try {
    return await axios.post(API_ROUTES[route], postBody, { params: getParams, signal: getRequest(uniqueKey) });;
  } catch (error) {
    errorCallback(error);
  }
}

function storeRequest(key) {
  ACTIVE_REQUESTS[key] = new AbortController();
}

function getRequest(key) {
  return ACTIVE_REQUESTS[key];
}

function killRequest(key) {
  ACTIVE_REQUESTS[key].abort();
  delete ACTIVE_REQUESTS[key];
}

const ACTIVE_REQUESTS = {};
