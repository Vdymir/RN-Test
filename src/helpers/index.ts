import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalStorage = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`${key}`, jsonValue);
  } catch (e) {
    return null;
  }
};

export const getLocalStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(`${key}`);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return null;
  }
};

export const getToken = () => {
  const token = getLocalStorage('token');
  if (token === null) return '';
  return `Bearer ${token}`;
};
