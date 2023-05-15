import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Details from '../screens/Details';

const {Screen, Navigator} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="details"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen
        name="details"
        component={Details}
        options={{
          gestureEnabled: false,
        }}
      />
    </Navigator>
  );
}
