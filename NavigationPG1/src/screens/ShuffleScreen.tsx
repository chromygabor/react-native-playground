/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStyles} from '../Styles';
import {Text, View} from 'react-native';

export interface IShuffleProps {}

const ShuffleScreen: React.FC<IShuffleProps> = (props: IShuffleProps) => {
  return (
    <View>
      <View style={{backroundColor: '#A020F0', flex: 1}} />

      <View style={{backgroundColor: '#7cb48f', flex: 3}} />
    </View>
  );
};

export default ShuffleScreen;
