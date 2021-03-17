import axios from "axios";

export const axiosGet = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        data
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
        data
      )
      .then(function (res) {
        resolve(res);
      })
      .catch(function (error) {
        reject(error);
      });
  })
}