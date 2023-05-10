/* eslint-disable @typescript-eslint/no-unused-vars */
import {ScrollView} from 'react-native';
import {Affirmations} from '../../Data';
import AffirmationListItem from './AffirmationListItem';
import {FeedID, useAffirmationsContext} from '../context/AffirmationRepository';

export interface AffirmationListProps {}

const AffirmationList: React.FC<AffirmationListProps> = (
  _props: AffirmationListProps,
) => {
  const repository = useAffirmationsContext().of(FeedID);

  const {data, isLoading, isFetching, isError, error} = useQuery();

  return (
    <>
      <ScrollView style={{padding: 10}}>
        {Affirmations.map(item => {
          return <AffirmationListItem key={item.id} item={item} />;
        })}
      </ScrollView>
    </>
  );
};

export default AffirmationList;
