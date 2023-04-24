/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStyles} from '../Styles';
import {Text, View} from 'react-native';

export interface IHomeProps {}

const HomeScreen: React.FC<IHomeProps> = (props: IHomeProps) => {
  return (
    <SafeAreaView style={HomeStyles.backgroundStyle}>
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
