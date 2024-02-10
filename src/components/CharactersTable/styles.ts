import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {COLORS} from '../../utils/constants';

export const CONTAINER_FLEX_SMALL = 1;
export const CONTAINER_FLEX_REGULAR = 2;
export const CONTAINER_FLEX_BIG = 3;

export const CELL_BASIC: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  margin: 10,
};

const DIVIDER: ViewStyle = {
  borderRightWidth: 1,
  borderRightColor: COLORS.black,
};

const HEADER_BASIC: TextStyle = {
  fontWeight: 'bold',
};

export const styles = StyleSheet.create({
  container: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRadius: 3,
    borderColor: COLORS.black,
  },
  scroll_container: {
    flex: 1,
  },
  scroll_container_content: {
    flex: 1,
  },
  body_container: {
    flex: 1,
  },
  row: {
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  like: {
    width: 20,
    height: 20,
  },
  cell_container_small: {
    ...CELL_BASIC,
    flex: CONTAINER_FLEX_SMALL,
  },
  cell_container_regular: {
    ...CELL_BASIC,
    flex: CONTAINER_FLEX_REGULAR,
  },
  cell_container_big: {
    ...CELL_BASIC,
    flex: CONTAINER_FLEX_BIG,
  },
  header_container_small: {
    ...HEADER_BASIC,
    ...CELL_BASIC,
    ...DIVIDER,
    flex: CONTAINER_FLEX_SMALL,
  },
  header_container_regular: {
    ...HEADER_BASIC,
    ...CELL_BASIC,
    ...DIVIDER,
    flex: CONTAINER_FLEX_REGULAR,
  },
  header_container_big: {
    ...HEADER_BASIC,
    ...CELL_BASIC,
    ...DIVIDER,
    flex: CONTAINER_FLEX_BIG,
  },
});
