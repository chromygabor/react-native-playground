/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStyles} from '../Styles';
import {Text, View} from 'react-native';

export interface IShuffleProps {}

const ShuffleScreen: React.FC<IShuffleProps> = (props: IShuffleProps) => {
  return (
    <SafeAreaView style={HomeStyles.backgroundStyle}>
      <View>
        <Text>Shuffle</Text>
      </View>
    </SafeAreaView>
  );
};

export default ShuffleScreen;
