import {StyleSheet} from 'react-native';
import {COLORS, ITEMS_PER_PAGE} from '../../utils/constants';

const CONTAINER_WIDTH_SMALL = 40;
const CONTAINER_WIDTH_REGULAR = 80;
const CONTAINER_WIDTH_BIG = 120;
const CELL_BASIC = {
  margin: 10,
};
const DIVIDER = {
  borderRightWidth: 1,
  borderRightColor: COLORS.black,
};

export const styles = StyleSheet.create({
  container: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRadius: 3,
    borderColor: COLORS.black,
    margin: 10,
    flex: 1,
  },
  like: {
    width: 20,
    height: 20,
  },
  body_container: {
    flex: ITEMS_PER_PAGE + 1,
  },
  row: {
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
  },
  cell_container_small: {
    ...CELL_BASIC,
    width: CONTAINER_WIDTH_SMALL,
  },
  cell_container_regular: {
    ...CELL_BASIC,
    width: CONTAINER_WIDTH_REGULAR,
  },
  cell_container_big: {
    ...CELL_BASIC,
    width: CONTAINER_WIDTH_BIG,
  },
  header_container_small: {
    ...CELL_BASIC,
    ...DIVIDER,
    width: CONTAINER_WIDTH_SMALL,
  },
  header_container_regular: {
    ...CELL_BASIC,
    ...DIVIDER,
    width: CONTAINER_WIDTH_REGULAR,
  },
  header_container_big: {
    ...CELL_BASIC,
    ...DIVIDER,
    width: CONTAINER_WIDTH_BIG,
  },
  pagination: {
    marginTop: 10,
  },
});
