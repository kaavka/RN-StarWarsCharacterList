import {View, Text} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {ArrowButton} from '../ArrowButton/ArrowButton';

interface Props {
  title: string;
}

export const CustomHeader = ({title}: Props) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ArrowButton direction="left" onTouch={handleBack} isDisabled={false} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
