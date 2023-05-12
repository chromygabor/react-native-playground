import {dev} from './dev';

export type Env = {
  API_ENDPOINT: string;
  PUBLIC_ENDPOINT: string;
};

const getEnv = (): Env => {
  if (process.env.NODE_ENV === 'development') {
    return dev;
  } else {
    throw new Error('No prod config yet');
  }
};

const env: Env = getEnv();

export default env;
