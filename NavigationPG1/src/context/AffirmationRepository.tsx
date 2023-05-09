/* eslint-disable @typescript-eslint/no-unused-vars */
import {PropsWithChildren, createContext, useContext} from 'react';
import {Text, View} from 'react-native';
import {AffirmationData} from '../models';
import {FeedRepository} from './AffirmationRepositories/FeedRepository';

export interface IAffirmationsProps {}
export interface IAffirmationsProviderProps {}

export const FeedID = '0000-0000-0000-0000';

export type Repository = {
  getNextItem(): AffirmationData | undefined;
  getPreviousItem(): AffirmationData | undefined;
  getNextItems(window: number): AffirmationData[];
};
export type Context = {
  of: (repo: string) => Repository;
};

const defaultRepository: Repository = {
  getNextItem: function (): AffirmationData | undefined {
    return undefined;
  },
  getPreviousItem: function (): AffirmationData | undefined {
    return undefined;
  },
  getNextItems: function (window: number): AffirmationData[] {
    return [];
  },
};

const defaultContext: Context = {
  of: (_repo: string) => {
    return defaultRepository;
  },
};

const Context = createContext<Context>(defaultContext);

export const useAffirmationsContext = () => {
  return useContext(Context);
};
const AffirmationsProvider: React.FC<IAffirmationsProviderProps> = (
  props: PropsWithChildren<IAffirmationsProviderProps>,
) => {
  const context = {
    of: (id: string) => {
      if (id === FeedID) {
        return FeedRepository;
      } else {
        throw new Error(`Can not load repository: ${id}`);
      }
    },
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default AffirmationsProvider;
