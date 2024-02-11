import {Person} from '../../../types/Person';

export const filterCharacters = (
  characters: Person[] | undefined,
  query: string | undefined,
): Person[] => {
  if (!query) {
    return characters || [];
  }
  const normalizedQuery = query.toLowerCase();
  return (characters || []).filter(character =>
    character.name.toLowerCase().includes(normalizedQuery),
  );
};
