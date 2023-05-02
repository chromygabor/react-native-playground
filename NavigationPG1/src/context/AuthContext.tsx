import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

type LoginParams = {};

interface IAuthContext {
  isLoading: boolean;
  token?: string;
  error?: string;
  login: (loginParams: LoginParams) => void;
  logout: () => void;
}

interface IAuthProvider {}

const defaultValue: IAuthContext = {
  isLoading: false,
  login: () => ({}),
  logout: () => ({}),
};

const AuthContext = createContext<IAuthContext>(defaultValue);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = (props: PropsWithChildren<IAuthProvider>) => {
  const [value, setValue] = useState<Omit<IAuthContext, 'login' | 'logout'>>({
    isLoading: false,
  });

  const login = (_loginParams: LoginParams) => {
    setValue({
      isLoading: true,
    });

    const timeout = Math.random() * 5 * 1000;
    console.log('Loading for: ', timeout);
    setTimeout(() => {
      // console.log('Finished');

      if (Math.random() < 0.3) {
        setValue({
          isLoading: false,
          error: 'Some random error',
        });
      } else {
        setValue({
          isLoading: false,
          token: '#### TOKEN ####',
        });
      }
    }, timeout);
  };

  const logout = () => {
    setValue({
      ...value,
      isLoading: true,
    });

    setTimeout(() => {
      if (Math.random() < 0.3) {
        setValue({
          isLoading: false,
          error: 'Some random error',
        });
      } else {
        setValue({
          isLoading: false,
        });
      }
    }, Math.random() * 5 * 1000);
  };

  console.log({value});
  return (
    <AuthContext.Provider value={{login, logout, ...value}}>
      {props.children}
    </AuthContext.Provider>
  );
};
