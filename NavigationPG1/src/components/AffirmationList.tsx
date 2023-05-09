import {ScrollView} from 'react-native';
import {Affirmations} from '../../Data';
import AffirmationListItem from './AffirmationListItem';

export interface AffirmationListProps {}

const AffirmationList: React.FC<AffirmationListProps> = (
  _props: AffirmationListProps,
) => {
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
