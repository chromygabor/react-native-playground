/* eslint-disable @typescript-eslint/no-unused-vars */
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../constants/routes';
import HomeScreen from '../screens/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';
import AffirmationFullScreen from '../screens/AffirmationFullScreen';
import {QueryClient, QueryClientProvider} from 'react-query';

const Stack = createStackNavigator();

const client = new QueryClient();

export interface IMyStackProps {}

const AppStack: React.FC<IMyStackProps> = (props: IMyStackProps) => {
  return (
    <QueryClientProvider client={client}>
      <Stack.Navigator initialRouteName={Routes.LOGIN}>
        <Stack.Screen
          name={Routes.HOME}
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.ITEMFULLSCREEN}
          component={AffirmationFullScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </QueryClientProvider>
  );
};
export default AppStack;
