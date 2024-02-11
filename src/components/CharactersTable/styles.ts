import {StyleSheet, TextStyle} from 'react-native';
import {COLORS} from '../../utils/constants';

const CONTAINER_FLEX_SMALL = 1;
const CONTAINER_FLEX_REGULAR = 2;
const CONTAINER_FLEX_BIG = 3;

const CELL_BASE: TextStyle = {
  textAlign: 'center',
  alignItems: 'center',
  marginVertical: 10,
};

const HEADER_BASE: TextStyle = {
  ...CELL_BASE,
  fontWeight: 'bold',
};

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: COLORS.black,
    marginBottom: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  row: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  like: {
    width: 20,
    height: 20,
  },
  error: {
    flexGrow: 1,
    justifyContent: 'center',
    color: COLORS.red,
    borderBottomWidth: 1,
    textAlign: 'center',
    paddingVertical: 10,
  },
  cell_container_small: {
    ...CELL_BASE,
    flex: CONTAINER_FLEX_SMALL,
  },
  cell_container_regular: {
    ...CELL_BASE,
    flex: CONTAINER_FLEX_REGULAR,
  },
  cell_container_big: {
    ...CELL_BASE,
    flex: CONTAINER_FLEX_BIG,
  },
  header_container_small: {
    ...HEADER_BASE,
    flex: CONTAINER_FLEX_SMALL,
    borderRightWidth: 1,
    borderColor: COLORS.black,
  },
  header_container_regular: {
    ...HEADER_BASE,
    flex: CONTAINER_FLEX_REGULAR,
    borderRightWidth: 1,
    borderColor: COLORS.black,
  },
  header_container_big: {
    ...HEADER_BASE,
    flex: CONTAINER_FLEX_BIG,
    borderRightWidth: 1,
    borderColor: COLORS.black,
  },
});
