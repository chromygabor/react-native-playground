/* eslint-disable @typescript-eslint/no-unused-vars */
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useAuthContext} from '../context/AuthContext';

const AppNavigation: React.FC = () => {
  const {isLoading, token, error} = useAuthContext();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default AppNavigation;
