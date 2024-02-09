import {ScrollView, StyleSheet} from 'react-native';
import {CharactersTable} from '../../components/CharactersTable/CharactersTable';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../../utils/constants';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../routes/AppStack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

type HomeScreenRouteProp = RouteProp<{Home: {page: number}}, 'Home'>;
type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Home'
>;

interface HomeScreenProps {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({route, navigation}: HomeScreenProps) => {
  const {page = 1} = route.params;

  const nextPage = () => {
    navigation.navigate('Home', {
      page: page + 1,
    });
  };

  const previousPage = () => {
    navigation.navigate('Home', {
      page: page - 1,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <CharactersTable
          nextPage={nextPage}
          previousPage={previousPage}
          page={page}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
