/* eslint-disable @typescript-eslint/no-unused-vars */
import {QueryFunctionContext, useInfiniteQuery, useQuery} from 'react-query';
import env from '../envs';
import {AffirmationData} from '../models';

export type QueryResult<T> = {
  result: T[];
  totalRecord: number;
  page: number;
  pageSize: number;
};

const CACHE_KEY = 'affirmations';

const fetchAffirmations: (
  ops: QueryFunctionContext<string[], any>,
) => Promise<QueryResult<AffirmationData>> = async ({pageParam = 1}) => {
  const url = env.API_ENDPOINT + `/affirmations?_page=${pageParam}&_limit=10`;

  const result = await (
    await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  ).json();

  return result;
};

export const useAffirmationsData = () => {
  return useInfiniteQuery([CACHE_KEY], fetchAffirmations, {
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });
};
