// import Cookies from 'js-cookie'

const DOMAIN = 'http://api-agriculturecoop.marveltek.com/v1/public/'
const DOMAIN_PR = 'https://api-agriculturecoop.marveltek.com/v1/'

export const loginApi = (username, password) => {
  return new Promise((resolve, reject) => {
    fetch(DOMAIN_PR + 'authen-token/', {
      headers: { "Content-type": "application/json" },
      method: 'POST',
      body: JSON.stringify({ username, password })
    })
      .then((res) => {
        return res.json();
      })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      })
  })
}


export const getListProducer = (data) => {
    let url = new URL(DOMAIN + 'producer/');
    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]))
    return new Promise((resolve, reject) => {
      // let token = Cookies.get('token');
      fetch(url, {
        headers: {
          "Content-type": "application/json",
        },
        method: 'GET',
      })
        .then((res) => {
          return res.json();
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        })
    })
  }
  export const getListProduct = (data) => {
    let url = new URL(DOMAIN + 'product/');
    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]))
    return new Promise((resolve, reject) => {
      // let token = Cookies.get('token');
      fetch(url, {
        headers: {
          "Content-type": "application/json",
        },
        method: 'GET',
      })
        .then((res) => {
          return res.json();
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        })
    })
  }
  