import axios from 'axios';

export function getOptions(optionsApiUrl, resolve) {
  return axios({
    url: optionsApiUrl,
    method: 'GET',
    crossDomain: true,
    headers: {
      'Content-Type': "application/json"
    }
  }).then(response => {
    resolve(response.data);
  });
}