import React, {createContext, useState} from 'react';

interface Context {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}
interface Props {
  children: JSX.Element;
}
export const LoginContext = createContext({} as Context);

export default function LoginProvider({children}: Props) {
  const [token, setToken] = useState('');
  return (
    <LoginContext.Provider value={{token, setToken}}>
      {children}
    </LoginContext.Provider>
  );
}
