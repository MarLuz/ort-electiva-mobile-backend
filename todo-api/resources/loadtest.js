// k6 run loadtest.js -e AUTH_TOKEN=tu_token_aqui
import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 20,
  duration: "20s",
};

const BASE_URL = "http://localhost:3001/v1/todos";
const TOKEN = __ENV.AUTH_TOKEN; // Variable de entorno

export default function () {
  const headers = {
    headers: {
      Authorization: `${TOKEN}`,
    },
  };
  const res = http.get(BASE_URL, headers);

  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
