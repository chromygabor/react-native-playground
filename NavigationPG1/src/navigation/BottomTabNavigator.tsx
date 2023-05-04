/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Routes} from '../constants/routes';
import {HomeScreen, ShuffleScreen, FooScreen} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {HomeStyles} from '../Styles';

const Tab = createBottomTabNavigator();

type Params = {
  color: string;
  size: number;
  focused: boolean;
};

const tabBarIcon: (route: string) => (params: Params) => JSX.Element = (
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

const tabBar = (props: any) => {
  return <BottomTabBar {...props} style={{}} />;
};

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: tabBarIcon(route.name),
        //tabBar: tabBar,
      })}>
      <Tab.Screen
        name={Routes.HOME_TAB}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'red',
            padding: 0,
            margin: 0,
          },
        }}
      />
      <Tab.Screen name={Routes.SHUFFLE_TAB} component={ShuffleScreen} />
      <Tab.Screen name={Routes.FOO_TAB} component={FooScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
