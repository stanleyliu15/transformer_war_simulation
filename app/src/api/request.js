import { serverUrl } from '../constants';

const buildRequestParams = (method, body) => {
  const params = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  if (method) {
    params.method = method;
  }

  if (body && Object.keys(body).length > 0) {
    params.body = JSON.stringify(body);
  }

  return params;
};

const request = (endpoint, method, body) =>
  fetch(`${serverUrl}${endpoint}`, buildRequestParams(method, body)).then(response => {
    if (response.ok) {
      if (response.status === 204) {
        return null;
      }

      return response.json();
    }

    if (process.env.NODE_ENV === 'development') {
      return response.text().then(responseText => {
        throw Error(`${response.status} - ${responseText}`);
      });
    } else {
      throw Error('An error occurred making a request.');
    }
  });

export default request;
