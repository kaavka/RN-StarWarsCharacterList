import {Text, View} from 'react-native';
import {ArrowButton} from '../ArrowButton/ArrowButton';
import {styles} from './styles';
import {ITEMS_PER_PAGE} from '../../utils/constants';
import {getFirstPageItemNumber, getLastPagetItemNumber} from './utils/helpers';

interface Props {
  currentPage: number;
  totalItems: number;
  nextPageFunction: () => void;
  isNextPageDisabled: boolean;
  previousPageFunction: () => void;
  isPreviousPageDisabled: boolean;
}

export const Pagination = ({
  currentPage,
  totalItems,
  nextPageFunction,
  isNextPageDisabled,
  previousPageFunction,
  isPreviousPageDisabled,
}: Props) => {
  const firstItemNumber = getFirstPageItemNumber(ITEMS_PER_PAGE, currentPage);
  const lastItemNumber = getLastPagetItemNumber(
    firstItemNumber,
    ITEMS_PER_PAGE,
    totalItems,
  );

  return (
    <View style={styles.pagination}>
      <Text>
        {`${String(firstItemNumber)} - ${String(lastItemNumber)} of ${String(
          totalItems || 0,
        )}`}
      </Text>
      <ArrowButton
        direction="left"
        onTouch={previousPageFunction}
        isDisabled={isPreviousPageDisabled}
      />
      <ArrowButton
        direction="right"
        onTouch={nextPageFunction}
        isDisabled={isNextPageDisabled}
      />
    </View>
  );
};
