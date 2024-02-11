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
import {addFan, removeFan} from '../../../redux/features/fansSlice';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {isCharacterLiked} from './utils/helpers';
import {useAppDispatch} from '../../../redux/hooks/useAppDispatch';

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
  const fans = useSelector((state: RootState) => state.fans);
  const dispatch = useAppDispatch();

  const handleToggleCharacter = (
    character: Person,
    isCharacterInStore: boolean,
  ) => {
    if (isCharacterInStore) {
      dispatch(removeFan(character.gender, character.name));
    } else {
      dispatch(addFan(character.gender, character.name));
    }
  };

  return characters.map(character => {
    const isLiked = isCharacterLiked(character, fans);

    return (
      <TouchableOpacity
        key={generateId()}
        style={rowStyle}
        onPress={() => navigateToCharacterScreen(character)}>
        <TouchableOpacity
          style={cellStyleSmall}
          activeOpacity={1}
          onPress={() => handleToggleCharacter(character, isLiked)}>
          <Image
            source={
              isLiked
                ? require('../../../assets/icons/heart_red.png')
                : require('../../../assets/icons/heart_empty.png')
            }
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
    );
  });
};
