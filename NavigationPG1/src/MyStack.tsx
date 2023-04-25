/* eslint-disable @typescript-eslint/no-unused-vars */
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './constants/routes';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {useState} from 'react';

const Stack = createStackNavigator();

export interface IMyStackProps {}

const AppNavigation: React.FC<IMyStackProps> = (props: IMyStackProps) => {
  const [userToken, setUserToken] = useState();
  return (
    <Stack.Navigator initialRouteName={Routes.LOGIN}>
      <Stack.Screen
        name={Routes.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{headerLeft: () => <></>}}
      />
    </Stack.Navigator>
  );
};
export default AppNavigation;
