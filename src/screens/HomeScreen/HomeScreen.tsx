import React from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../routes/AppStack';
import {useGetPageOfCharactersQuery} from '../../redux/api/starWarsApi';
import {Person} from '../../types/Person';
import {styles} from './styles';
import {Pagination} from '../../components/Pagination/Pagination';
import {SearchInput} from '../../components/SearchInput/SearchInput';
import {CharactersTable} from '../../components/CharactersTable/CharactersTable';
import FansViwer from '../../components/FansViwer/FansViwer';
import {filterCharacters} from './utils/helpers';
import {LoadingIndicator} from '../../components/LoadingIndicator/LoadingIndicator';

type HomeScreenRouteProp = RouteProp<AppStackParamList, 'Home'>;
type HomeScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  'Home'
>;

interface HomeScreenProps {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({route, navigation}) => {
  const {page = 1, query} = route.params;
  const {data, isFetching} = useGetPageOfCharactersQuery(page);

  const displayedCharacters = filterCharacters(data?.results, query);

  const isNextPageDisabled = data?.next === null;
  const isPreviousPageDisabled = data?.previous === null;

  const navigateToCharacterScreen = (character: Person) => {
    navigation.navigate('CharacterScreen', {character});
  };

  const nextPage = () => {
    navigation.navigate('Home', {page: page + 1});
  };

  const previousPage = () => {
    navigation.navigate('Home', {page: page - 1});
  };

  const applySearch = (search: string) => {
    navigation.navigate('Home', {page, query: search});
  };

  return (
    <SafeAreaView style={styles.safe_container}>
      <ScrollView
        style={styles.scroll_container}
        contentContainerStyle={styles.scroll_container_content}>
        <View style={styles.container}>
          <FansViwer />
          <View style={styles.card_container}>
            <View style={styles.search}>
              <SearchInput applyQuery={applySearch} />
            </View>

            {isFetching ? (
              <LoadingIndicator />
            ) : (
              <CharactersTable
                characters={displayedCharacters}
                navigateToCharacterScreen={navigateToCharacterScreen}
              />
            )}

            <View style={styles.pagination}>
              <Pagination
                isNextPageDisabled={isNextPageDisabled}
                isPreviousPageDisabled={isPreviousPageDisabled}
                nextPageFunction={nextPage}
                previousPageFunction={previousPage}
                totalItems={data?.count || 0}
                currentPage={page}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
