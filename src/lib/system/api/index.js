import axios from 'axios';
import { API_ROUTES } from 'lib/system/api/apiRoutes';

import validate from 'lib/utils/validate';

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
    return await axios.get(API_ROUTES[route], { params: getParams, signal: getSignal(uniqueKey) });
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

  try {
    storeRequest(uniqueKey);
    return await axios.post(API_ROUTES[route], postBody, { params: getParams, signal: getSignal(uniqueKey) });;
  } catch (error) {
    errorCallback(error);
  }
}

function storeRequest(key) {
  ACTIVE_REQUESTS[key] = new AbortController();
}

function getSignal(key) {
  return ACTIVE_REQUESTS[key].signal;
}

function killRequest(key) {
  if (validate.isUndefined(ACTIVE_REQUESTS[key])) {
    return;
  }

  ACTIVE_REQUESTS[key].abort();
  delete ACTIVE_REQUESTS[key];
}

const ACTIVE_REQUESTS = {};
