/* eslint-disable @typescript-eslint/no-unused-vars */
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
const screenWidth = Dimensions.get('screen').width;

const Item: React.FC<Omit<ItemData, 'id'>> = (props: Omit<ItemData, 'id'>) => {
  return (
    <View style={{flex: 1, backgroundColor: 'yellow', margin: 10}}>
      <ImageBackground
        source={props.imageSource}
        style={{backgroundColor: 'green'}}
        resizeMode="contain">
        <View style={{flex: 1}}>
          <Text>{props.label}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Item;
