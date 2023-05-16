import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Details from '../screens/Details';

const {Screen, Navigator} = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: true,
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Screen name="details" component={Details} />
    </Navigator>
  );
}
