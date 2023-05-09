/* eslint-disable @typescript-eslint/no-unused-vars */
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Dimensions, StatusBar, View} from 'react-native';
import FullScreenChz from 'react-native-fullscreen-chz';
import Affirmation from '../components/Affirmation';
import {AffirmationData} from '../models';

export interface AffirmationFullScreenProps {}

const {height, width} = Dimensions.get('screen');

const AffirmationFullScreen: React.FC<
  AffirmationFullScreenProps
> = ({}: AffirmationFullScreenProps) => {
  const route = useRoute();
  const item = route.params as AffirmationData;

  const [fullscreen, setFullscreen] = useState<boolean>(true);

  useEffect(() => {
    if (fullscreen) {
      console.log('Setting to fullscreen');
      FullScreenChz.enable();
      StatusBar.setHidden(false);
    } else {
      console.log('Setting back from fullscreen');
      FullScreenChz.disable();
    }
  }, [fullscreen]);

  const onPress = () => {
    setFullscreen(!fullscreen);
  };

  const ratio = height / item.image.height; // what if it is not a vertical image?

  console.log(item);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Affirmation onPress={onPress} ratio={ratio} item={item} />
    </View>
  );
};

export default AffirmationFullScreen;
