
import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus:10,
  duration: '60s',
};
const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization':'Bearer token'
    },

  };
export default function () {
  http.get('url', params)

sleep(1);
}
