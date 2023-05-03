import {
  Dimensions,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from 'react-native';

export type ItemData = {
  id: string;
  imageSource: ImageSourcePropType;
  label: string;
};

const screenHeight = Dimensions.get('screen').height;

const Item: React.FC<Omit<ItemData, 'id'>> = (props: Omit<ItemData, 'id'>) => {
  return (
    <View>
      <ImageBackground source={props.imageSource} style={{}} resizeMode="cover">
        <View style={{height: screenHeight}}>
          <Text>{props.label}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Item;
