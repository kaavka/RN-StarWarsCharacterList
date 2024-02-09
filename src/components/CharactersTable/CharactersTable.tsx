import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useGetPageOfCharactersQuery} from '../../redux/api/starWarsApi';
import {isContainerBig} from './utils/helpers';
import {generateId} from '../../utils/functions';
import {styles} from './styles';
import {PROPERTIES_DISPLAYED} from './utils/constants';
import {Pagination} from '../Pagination/Pagination';

interface Props {
  page: number;
  nextPage: () => void;
  previousPage: () => void;
}

export const CharactersTable = ({page, nextPage, previousPage}: Props) => {
  const {data, error, isFetching} = useGetPageOfCharactersQuery(page);

  const isNexPageDisabled = data?.next === null;
  const isPreviousPageDisabled = data?.previous === null;

  if (error) {
    throw new Error(`status: ${error}`);
  }

  return isFetching ? (
    <Text>Loading...</Text>
  ) : (
    <View>
      {error && <Text>Unable to get data try again later</Text>}
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.header_container_small}>
            <Image
              source={require('../../assets/icons/heart_black.png')}
              style={styles.like}
            />
          </View>
          {Object.values(PROPERTIES_DISPLAYED).map(value => {
            return (
              <Text
                key={generateId()}
                style={
                  isContainerBig(value)
                    ? styles.header_container_big
                    : styles.header_container_regular
                }>
                {value}
              </Text>
            );
          })}
        </View>
        <View style={styles.body_container}>
          {data?.results.map(character => {
            return (
              <View key={generateId()} style={styles.row}>
                <TouchableOpacity style={styles.cell_container_small}>
                  <Image
                    source={require('../../assets/icons/heart_empty.png')}
                    style={styles.like}
                  />
                </TouchableOpacity>

                {Object.keys(PROPERTIES_DISPLAYED).map(key => (
                  <Text
                    key={generateId()}
                    style={
                      isContainerBig(key)
                        ? styles.cell_container_big
                        : styles.cell_container_regular
                    }>
                    {character[key]}
                  </Text>
                ))}
              </View>
            );
          })}
        </View>
      </View>
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
  );
};
