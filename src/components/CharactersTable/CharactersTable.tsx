import {Text, View} from 'react-native';
import {useGetAllCharactersQuery} from '../../redux/api/starWarsApi';

export const CharatersTable = () => {
  const {data, error, isLoading} = useGetAllCharactersQuery();

  if (error) {
    throw new Error(`status: ${error}`);
  }

  if (data) {
    console.log(data);
  }

  return isLoading ? (
    <Text>Loading...</Text>
  ) : (
    <View>
      {data?.results.map(character => {
        return <Text>{`${character.name}`}</Text>;
      })}
    </View>
  );
};
