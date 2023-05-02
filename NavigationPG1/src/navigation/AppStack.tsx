/* eslint-disable @typescript-eslint/no-unused-vars */
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../constants/routes';
import HomeScreen from '../screens/HomeScreen';
import BottonTabNavigator from './BottonTabNavigator';

const Stack = createStackNavigator();

export interface IMyStackProps {}

const AppStack: React.FC<IMyStackProps> = (props: IMyStackProps) => {
  return (
    <Stack.Navigator initialRouteName={Routes.LOGIN}>
      <Stack.Screen
        name={Routes.HOME}
        component={BottonTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AppStack;
