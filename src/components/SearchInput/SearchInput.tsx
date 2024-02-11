import {useState} from 'react';
import {Image, TextInput, View, Text} from 'react-native';
import {styles} from './styles';

interface Props {
  applyQuery: (query: string) => void;
}

export const SearchInput = ({applyQuery}: Props) => {
  const [query, setQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (text: string) => {
    if (text.length > 20) {
      setErrorMessage('Query should not exceed 20 characters');
    }

    setQuery(text);
  };

  const onSubmit = () => {
    applyQuery(query.toLowerCase());
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/magnifying_glass.png')}
        style={styles.icon}
      />
      <TextInput
        placeholder="Search"
        style={styles.input}
        value={query}
        onChangeText={handleInputChange}
        onSubmitEditing={() => onSubmit()}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
};
