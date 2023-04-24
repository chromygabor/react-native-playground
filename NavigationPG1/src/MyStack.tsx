/* eslint-disable @typescript-eslint/no-unused-vars */
import {createStackNavigator} from '@react-navigation/stack';
import Routes from './constants/routes';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

export interface IMyStackProps {}

const MyStack: React.FC<IMyStackProps> = (props: IMyStackProps) => {
  return (
    <Stack.Navigator initialRouteName={Routes.LOGIN}>
      <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Routes.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};
export default MyStack;
