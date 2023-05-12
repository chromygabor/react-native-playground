/* eslint-disable @typescript-eslint/no-unused-vars */
import {QueryFunctionContext, useInfiniteQuery, useQuery} from 'react-query';
import env from '../envs';
import {AffirmationData} from '../models';

const CACHE_KEY = 'affirmations';

const fetchAffirmations: (
  ops: QueryFunctionContext<string[], any>,
) => Promise<AffirmationData[]> = async ({pageParam = 1}) => {
  return (
    await fetch(
      env.API_ENDPOINT + `/affirmations?_limit=2&_page=${pageParam}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
  ).json();
};

export const useAffirmationsData = () => {
  return useInfiniteQuery([CACHE_KEY], fetchAffirmations, {
    getNextPageParam: (lastPage, pages) => {
      const res = pages.length < 4 ? pages.length + 1 : undefined;
      return res;
    },
  });
};
