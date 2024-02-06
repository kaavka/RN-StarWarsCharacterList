import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';

const Router = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Router;
