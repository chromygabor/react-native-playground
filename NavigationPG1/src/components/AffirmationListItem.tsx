/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Routes} from '../constants/routes';
import Affirmation from './Affirmation';
import {AffirmationData} from '../models';

type AffirmationListItemProps = {
  item: AffirmationData;
};

const AffirmationListItem: React.FC<AffirmationListItemProps> = ({
  item,
}: AffirmationListItemProps) => {
  const nav = useNavigation();

  const [ratio, setRatio] = useState(1);

  const onLayout = (event: LayoutChangeEvent) => {
    const {width: viewWidth} = event.nativeEvent.layout;
    setRatio(viewWidth / item.image.width);
  };

  const onPress = (event: any) => {
    nav.navigate(Routes.ITEMFULLSCREEN as never, item as never);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.itemHeader}>
          <Avatar.Text size={36} label="CG" />
          <View style={styles.itemHeaderTextContainer}>
            <Text style={styles.itemHeaderTextPrimary}>Chromy Gábor</Text>
            <Text style={styles.itemHeaderTextSecondary}>
              2 perccel ezelőtt
            </Text>
          </View>
        </View>

        <View onLayout={onLayout} style={styles.affirmation}>
          <Affirmation item={item} onPress={onPress} ratio={ratio} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  itemHeader: {flex: 1, flexDirection: 'row', marginVertical: 10},
  itemHeaderTextContainer: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemHeaderTextPrimary: {color: 'black'},
  itemHeaderTextSecondary: {color: 'black', fontSize: 10},
  container: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  affirmation: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default AffirmationListItem;
