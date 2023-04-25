/* eslint-disable @typescript-eslint/no-unused-vars */
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LoginStyles} from '../../Styles';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../constants/routes';

export interface ILoginScreenProps {}

const LoginScreen: React.FC<ILoginScreenProps> = (props: ILoginScreenProps) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={LoginStyles.backgroundStyle}>
      <View style={LoginStyles.container}>
        <View />
        <View style={LoginStyles.textInput}>
          <View style={LoginStyles.login}>
            <Text variant="headlineLarge">Login</Text>
            <Text variant="titleMedium">Please Sign in to continue</Text>
          </View>
          <TextInput
            label="Email"
            value={''}
            onChangeText={text => {}}
            keyboardType={'email-address'}
            mode="outlined"
            style={LoginStyles.inputs}
          />
          <TextInput
            secureTextEntry={true}
            label="Password"
            value={''}
            onChangeText={text => {}}
            textContentType={'password'}
            mode="outlined"
            style={LoginStyles.inputs}
          />
          <View style={LoginStyles.forgot}>
            <Button mode="text">Forgot password?</Button>
          </View>
          <View style={LoginStyles.buttonContainer}>
            <Button
              mode="contained"
              onPress={() => navigation.navigate(Routes.HOME)}
              style={LoginStyles.button}>
              Sign in
            </Button>
          </View>
        </View>
        <View style={LoginStyles.signUp}>
          <Button mode="text">Don't have an account? Sign up</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
