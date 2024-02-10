import {
  Image,
  ImageStyle,
  StyleProp,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {PROPERTIES_DISPLAYED} from '../utils/constants';
import {generateId} from '../../../utils/functions';
import {isContainerBig} from '../utils/helpers';

interface Props {
  likeStyle: StyleProp<ImageStyle>;
  rowStyle: StyleProp<ViewStyle>;
  cellStyleSmall: StyleProp<ViewStyle>;
  cellStyleRegular: StyleProp<ViewStyle>;
  cellStyleBig: StyleProp<ViewStyle>;
}

export const CharactersTableHeader = ({
  likeStyle,
  rowStyle,
  cellStyleSmall,
  cellStyleRegular,
  cellStyleBig,
}: Props) => {
  return (
    <View style={rowStyle}>
      <View style={cellStyleSmall}>
        <Image
          source={require('../../../assets/icons/heart_black.png')}
          style={likeStyle}
        />
      </View>
      {Object.values(PROPERTIES_DISPLAYED).map((value, index, array) => {
        let style = isContainerBig(value) ? cellStyleBig : cellStyleRegular;

        if (index === array.length - 1) {
          style = [style, {borderRightWidth: 0}];
        }

        return (
          <Text key={generateId()} style={style}>
            {value}
          </Text>
        );
      })}
    </View>
  );
};
