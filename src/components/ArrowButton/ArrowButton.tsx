import {Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface Props {
  isDisabled: boolean;
  direction: 'right' | 'left';
  onTouch: () => void;
}

export const ArrowButton = ({isDisabled, direction, onTouch}: Props) => {
  let imageSource;

  if (direction === 'right') {
    imageSource = isDisabled
      ? require('../../assets/icons/right_arrow_disabled.png')
      : require('../../assets/icons/right_arrow.png');
  }

  if (direction === 'left') {
    imageSource = isDisabled
      ? require('../../assets/icons/left_arrow_disabled.png')
      : require('../../assets/icons/left_arrow.png');
  }

  return (
    <TouchableOpacity onPress={onTouch} disabled={isDisabled}>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};
