import axios from 'axios';
import {_ULR_BASE_} from '../constants';
import {setLocalStorage} from '../helpers';
import {LoginBody, LoginSuccess, Usuario} from '../interfaces/login';

export default async function userLogin(
  body: LoginBody,
): Promise<LoginSuccess> {
  return new Promise(async (resolve, _) => {
    try {
      const result = await axios.post<LoginSuccess>(
        `${_ULR_BASE_}auth/login`,
        body,
      );
      resolve(result.data);
    } catch (e: any) {
      resolve(e.response.data.message);
    }
  });
}
