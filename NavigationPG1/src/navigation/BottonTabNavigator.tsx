/* eslint-disable @typescript-eslint/no-unused-vars */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../constants/routes';
import {HomeScreen, ShuffleScreen, FooScreen} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {ParamListBase, RouteProp} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

type Params = {
  color: string;
  size: number;
  focused: boolean;
};

const Foo2: (route: string) => (params: Params) => JSX.Element = (
  routeName: string,
) => {
  const Icons = {
    [Routes.HOME_TAB]: 'ios-home',
    [Routes.SHUFFLE_TAB]: 'shuffle',
    [Routes.FOO_TAB]: 'close',
  };
  return (params: Params) => {
    const iconName = params.focused
      ? `${Icons[routeName]}-sharp`
      : `${Icons[routeName]}-outline`;
    return <Icon name={iconName} size={params.size} color={params.color} />;
  };
};

const BottonTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: Foo2(route.name),
      })}>
      <Tab.Screen name={Routes.HOME_TAB} component={HomeScreen} />
      <Tab.Screen name={Routes.SHUFFLE_TAB} component={ShuffleScreen} />
      <Tab.Screen name={Routes.FOO_TAB} component={FooScreen} />
    </Tab.Navigator>
  );
};

export default BottonTabNavigator;
