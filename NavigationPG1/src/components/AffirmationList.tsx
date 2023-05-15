/* eslint-disable @typescript-eslint/no-unused-vars */
import {FlatList, ScrollView, Text} from 'react-native';
import {ActivityIndicator, Button} from 'react-native-paper';
import AffirmationListItem from './AffirmationListItem';
import {useAffirmationsData} from '../hooks/useAffirmationsData';

export interface AffirmationListProps {}

const AffirmationList: React.FC<AffirmationListProps> = (
  _props: AffirmationListProps,
) => {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useAffirmationsData({});

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>Something went wrong: {error.message}</Text>;
  }

  return (
    <>
      <FlatList
        style={{padding: 10}}
        data={data?.pages}
        renderItem={({item: queryResult, index}) => {
          // return <AffirmationListItem key={item.id} item={item} />;
          return (
            <>
              {queryResult.result.map(item => {
                return <AffirmationListItem key={item.id} item={item} />;
              })}
            </>
          );
        }}
        onEndReached={() => fetchNextPage()}
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

export default AffirmationList;
