import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus:100,
  duration: '60s',
};
export default function () {
  http.get('http://34.63.52.168/')

sleep(1);
}
