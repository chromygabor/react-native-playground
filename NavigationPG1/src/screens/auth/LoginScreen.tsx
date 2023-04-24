/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoginStyles} from '../../Styles';
import {View} from 'react-native';
import {Button, Text, Avatar, Card, IconButton} from 'react-native-paper';

export interface ILoginScreenProps {}

const LoginScreen: React.FC<ILoginScreenProps> = (props: ILoginScreenProps) => {
  return (
    <SafeAreaView style={LoginStyles.backgroundStyle}>
      <View>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={props => <Avatar.Icon {...props} icon="heart" />}
          />
          <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
