/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeStyles} from '../Styles';
import {Text, View} from 'react-native';

export interface IFooProps {}

const FooScreen: React.FC<IFooProps> = (props: IFooProps) => {
  return (
    <SafeAreaView style={HomeStyles.backgroundStyle}>
      <View>
        <Text>Hello Foo</Text>
      </View>
    </SafeAreaView>
  );
};

export default FooScreen;
