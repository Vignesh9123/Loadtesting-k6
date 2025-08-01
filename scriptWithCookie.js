import http from 'k6/http';

export default function () {
  http.get('url', {
    cookies: {
      my_name: 'heisenberg',
    },
  });
}
