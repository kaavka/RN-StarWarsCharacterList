import {
  Image,
  ImageStyle,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Person} from '../../../types/Person';
import {generateId} from '../../../utils/functions';
import {PROPERTIES_DISPLAYED} from '../utils/constants';
import {isContainerBig} from '../utils/helpers';

interface Props {
  likeStyle: StyleProp<ImageStyle>;
  rowStyle: StyleProp<ViewStyle>;
  cellStyleSmall: StyleProp<ViewStyle>;
  cellStyleRegular: StyleProp<ViewStyle>;
  cellStyleBig: StyleProp<ViewStyle>;
  characters: Person[];
  navigateToCharacterScreen: (character: Person) => void;
}

export const CharactersTableBody = ({
  likeStyle,
  rowStyle,
  cellStyleSmall,
  cellStyleRegular,
  cellStyleBig,
  characters,
  navigateToCharacterScreen,
}: Props) => {
  return characters.map(character => (
    <TouchableOpacity
      key={generateId()}
      style={rowStyle}
      onPress={() => navigateToCharacterScreen(character)}>
      <TouchableOpacity style={cellStyleSmall} activeOpacity={1}>
        <Image
          source={require('../../../assets/icons/heart_empty.png')}
          style={likeStyle}
        />
      </TouchableOpacity>

      {Object.keys(PROPERTIES_DISPLAYED).map(key => (
        <Text
          key={generateId()}
          style={isContainerBig(key) ? cellStyleBig : cellStyleRegular}>
          {character[key]}
        </Text>
      ))}
    </TouchableOpacity>
  ));
};
