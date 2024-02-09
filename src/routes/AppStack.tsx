import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CharacterScreen from '../screens/CharacterScreen/CharacterScreen';

export type AppStackParamList = {
  Home: {page: number};
  CharacterScreen: {id: number};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{page: 1}}
      />
      <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
    </Stack.Navigator>
  );
};
