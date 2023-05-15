/* eslint-disable @typescript-eslint/no-unused-vars */
import {useRoute} from '@react-navigation/native';
import {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  FlatList,
  Text,
  View,
} from 'react-native';
import {useAffirmationsData} from '../hooks/useAffirmationsData';
import {AffirmationData} from '../models';
import Carousel from 'react-native-reanimated-carousel';

export interface AffirmationFullScreenProps {}

const {height, width} = Dimensions.get('screen');

const data2 = Array(7)
  .fill(5)
  .map(input => {
    return {
      text: 'input:' + input,
      backgroundColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    };
  });

const AffirmationFullScreen: React.FC<
  AffirmationFullScreenProps
> = ({}: AffirmationFullScreenProps) => {
  const route = useRoute();
  const item = route.params as AffirmationData;

  const [fullscreen, setFullscreen] = useState<boolean>(true);

  // useEffect(() => {
  //   if (fullscreen) {
  //     console.log('Setting to fullscreen');
  //     FullScreenChz.enable();
  //     StatusBar.setHidden(false);
  //   } else {
  //     console.log('Setting back from fullscreen');
  //     FullScreenChz.disable();
  //   }
  // }, [fullscreen]);

  const onPress = () => {
    setFullscreen(!fullscreen);
  };

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

  const scrollX = useRef(new Animated.Value(0)).current;

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (isError) {
    return <Text>Something went wrong: {error.message}</Text>;
  }

  return (
    <View>
      <Animated.FlatList
        data={data2}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={32}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          // console.log({item});
          return (
            <View
              style={{
                backgroundColor: item.backgroundColor,
                flex: 1,
                width,
                height,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Text>foo</Text>
            </View>
          );
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
      />
    </View>
  );
};

export default AffirmationFullScreen;
