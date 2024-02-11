import {styles} from './styles';
import {Person} from '../../types/Person';
import {CharactersTableHeader} from './CharactersTableHeader/CharactersTableHeader';
import {CharactersTableBody} from './CharactersTableBody/CharactersTableBody';
import {Text, View} from 'react-native';

interface Props {
  characters: Person[];
  navigateToCharacterScreen: (character: Person) => void;
}

export const CharactersTable = ({
  characters,
  navigateToCharacterScreen,
}: Props) => {
  return (
    <View style={styles.container}>
      <CharactersTableHeader
        likeStyle={styles.like}
        cellStyleSmall={styles.header_container_small}
        cellStyleRegular={styles.header_container_regular}
        cellStyleBig={styles.header_container_big}
        rowStyle={styles.row}
      />
      {characters.length ? (
        <CharactersTableBody
          likeStyle={styles.like}
          cellStyleSmall={styles.cell_container_small}
          cellStyleRegular={styles.cell_container_regular}
          cellStyleBig={styles.cell_container_big}
          rowStyle={styles.row}
          characters={characters}
          navigateToCharacterScreen={navigateToCharacterScreen}
        />
      ) : (
        <Text style={styles.error}>No characters</Text>
      )}
    </View>
  );
};
