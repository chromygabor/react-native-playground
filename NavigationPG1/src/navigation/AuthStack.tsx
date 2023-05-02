import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from '../constants/routes';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.LOGIN}>
      <Stack.Screen
        name={Routes.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
