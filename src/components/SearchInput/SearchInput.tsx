import {Image, TextInput, View} from 'react-native';
import {styles} from './styles';

export const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/magnifying_glass.png')}
        style={styles.icon}
      />
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
};
