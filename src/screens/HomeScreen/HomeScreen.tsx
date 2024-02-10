import {ScrollView, Text, View} from 'react-native';
import {CharactersTable} from '../../components/CharactersTable/CharactersTable';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../routes/AppStack';
import {useGetPageOfCharactersQuery} from '../../redux/api/starWarsApi';
import {Person} from '../../types/Person';
import {styles} from './styles';
import {Pagination} from '../../components/Pagination/Pagination';
import {SearchInput} from '../../components/SearchInput/SearchInput';

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
  const {data, isFetching} = useGetPageOfCharactersQuery(page);

  const isNexPageDisabled = data?.next === null;
  const isPreviousPageDisabled = data?.previous === null;

  const navigateToCharacterScreen = (character: Person) => {
    navigation.navigate('CharacterScreen', {character});
  };

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
    <SafeAreaView style={styles.safe_container}>
      <ScrollView
        style={styles.scroll_container}
        contentContainerStyle={styles.scroll_container_content}>
        <View style={styles.container}>
          <View style={styles.search}>
            <SearchInput />
          </View>

          {isFetching ? (
            <Text>Is Loading...</Text>
          ) : (
            <CharactersTable
              characters={data?.results as Person[]}
              navigateToCharacterScreen={navigateToCharacterScreen}
            />
          )}

          <View style={styles.pagination}>
            <Pagination
              isNextPageDisabled={isNexPageDisabled}
              isPreviousPageDisable={isPreviousPageDisabled}
              nextPageFunction={nextPage}
              previousPageFunction={previousPage}
              totalItems={data?.count as number}
              currentPage={page}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
