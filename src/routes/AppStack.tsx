import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CharacterScreen from '../screens/CharacterScreen/CharacterScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <SafeAreaView>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CharachterScreen" component={CharacterScreen} />
    </SafeAreaView>
  );
};

export default AppStack;
