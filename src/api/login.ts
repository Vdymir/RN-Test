import axios from 'axios';

const _ULR_BASE_ = 'https://testing-1.api.encamino.ar/';

interface ILogin {
  dni: string;
  email: string;
  password: string;
}

export default async function userLogin(body: ILogin) {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await axios.post(`${_ULR_BASE_}auth/login`, {
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });
      resolve(result.data);
    } catch ({response}) {
      reject(response);
    }
  });
}
