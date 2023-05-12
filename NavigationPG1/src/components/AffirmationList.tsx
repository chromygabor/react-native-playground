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
  } = useAffirmationsData();

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
        data={data?.pages.flat()}
        renderItem={({item}) => {
          return <AffirmationListItem key={item.id} item={item} />;
        }}
      />
      {/* {data?.map(item => {
          return <AffirmationListItem key={item.id} item={item} />;
        })} */}
      <Button onPress={() => fetchNextPage()} disabled={!hasNextPage}>
        Fetch more
      </Button>
    </>
  );
};

export default AffirmationList;
