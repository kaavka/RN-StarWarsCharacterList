import {FansState} from '../../../../redux/features/fansSlice';
import {Person} from '../../../../types/Person';

export const isCharacterLiked = (character: Person, fans: FansState) => {
  let isLicked = false;

  switch (character.gender) {
    case 'male': {
      isLicked = fans.maleFans.includes(character.name);
      break;
    }

    case 'female': {
      isLicked = fans.femaleFans.includes(character.name);
      break;
    }

    default: {
      isLicked = fans.otherFans.includes(character.name);
    }
  }
  return isLicked;
};
