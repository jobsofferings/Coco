import axios from "axios";
import qs from "qs";

export const axiosGet = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: qs.stringify(data)
      })
      .then(function (res) {
        resolve(res);
      })
      .catch(function (error) {
        reject(error);
      });
  })
}

export function axiosPost(url: string, data: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(url,
        qs.stringify(data)
      )
      .then(function (res) {
        resolve(res);
      })
      .catch(function (error) {
        reject(error);
      });
  })
}