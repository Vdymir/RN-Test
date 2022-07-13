import axios from 'axios';
import {_ULR_BASE_} from '../constants';
import {getToken} from '../helpers';
import {Viajes} from '../interfaces/viajes';

export default async function getTrips(): Promise<Viajes[]> {
  return new Promise(async (resolve, _) => {
    try {
      const result = await axios.get<Viajes[]>(
        `${_ULR_BASE_}transportista/viajes`,
        {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": getToken(),
          },
        },
      );
      resolve(result.data);
    } catch (e: any) {
      resolve(e.response.data.message);
    }
  });
}
