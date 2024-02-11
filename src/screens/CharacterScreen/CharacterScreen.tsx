import React from 'react';
import {Text, View} from 'react-native';
import {Person} from '../../types/Person';
import {RouteProp} from '@react-navigation/native';
import {styles} from './styles';

type CharacterScreenRouteProp = RouteProp<
  {CharacterScreen: {character: Person}},
  'CharacterScreen'
>;

interface CharacterScreenProps {
  route: CharacterScreenRouteProp;
}

const PersonComponent: React.FC<CharacterScreenProps> = ({route}) => {
  const {character} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{character.name}</Text>
      <View style={styles.separator} />
      <View style={styles.row}>
        <Text style={styles.label}>Birth Year:</Text>
        <Text style={styles.value}>{character.birth_year}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Eye Color:</Text>
        <Text style={styles.value}>{character.eye_color}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.value}>{character.gender}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Height:</Text>
        <Text style={styles.value}>{character.height}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Mass:</Text>
        <Text style={styles.value}>{character.mass}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Skin Color:</Text>
        <Text style={styles.value}>{character.skin_color}</Text>
      </View>
    </View>
  );
};

export default PersonComponent;
