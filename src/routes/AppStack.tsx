import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CharacterScreen from '../screens/CharacterScreen/CharacterScreen';
import {Person} from '../types/Person';
import {CustomHeader} from '../components/CustomHeader/CustomHeader';

export type AppStackParamList = {
  Home: {page: number; query?: string};
  CharacterScreen: {character: Person};
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
        initialParams={{page: 1}}
      />
      <Stack.Screen
        name="CharacterScreen"
        component={CharacterScreen}
        options={({route}) => ({
          header: () => <CustomHeader title={route.params.character.name} />,
        })}
      />
    </Stack.Navigator>
  );
};
