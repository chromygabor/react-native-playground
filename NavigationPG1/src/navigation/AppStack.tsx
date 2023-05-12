/* eslint-disable @typescript-eslint/no-unused-vars */
import {createStackNavigator} from '@react-navigation/stack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Routes} from '../constants/routes';
import AffirmationFullScreen from '../screens/AffirmationFullScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const queryClient = new QueryClient();

if (__DEV__) {
  import('react-query-native-devtools').then(({addPlugin}) => {
    addPlugin({queryClient});
  });
}

export interface IMyStackProps {}

const AppStack: React.FC<IMyStackProps> = (props: IMyStackProps) => {
  return (
    <QueryClientProvider client={queryClient}>
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
