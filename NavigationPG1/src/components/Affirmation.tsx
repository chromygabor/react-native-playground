import {
  GestureResponderEvent,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import TypeWriter from 'react-native-typewriter';
import {AffirmationData} from '../models';
import env from '../envs';

export interface IAffirmationProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  item: AffirmationData;
  ratio: number;
}

const Affirmation: React.FC<IAffirmationProps> = ({
  onPress,
  item,
  ratio,
}: IAffirmationProps) => {
  const [width, height, fontSize] = [
    item.image.width * ratio,
    item.image.height * ratio,
    item.label.style.fontSize
      ? Math.ceil(item.label.style.fontSize * ratio)
      : undefined,
  ];

  const content = (
    <ImageBackground
      source={{uri: env.PUBLIC_ENDPOINT + item.image.url}}
      style={{width, height}}>
      <View
        style={{
          width,
          height,
        }}>
        <TypeWriter
          style={{
            ...item.label.style,
            fontSize,
            top: item.label.top + '%',
            left: item.label.left + '%',
          }}
          typing={1}>
          {item.label.text}
        </TypeWriter>
      </View>
    </ImageBackground>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{content}</TouchableOpacity>;
  } else {
    return content;
  }
};

export default Affirmation;
