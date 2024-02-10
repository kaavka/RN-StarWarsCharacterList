import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Person} from '../../types/Person';
import {RouteProp} from '@react-navigation/native';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textTransform: 'capitalize',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#555',
    textTransform: 'capitalize',
  },
  value: {
    flex: 2,
    color: '#444',
    textTransform: 'capitalize',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

export default PersonComponent;
