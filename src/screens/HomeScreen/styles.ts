import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  safe_container: {
    flex: 1,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  search: {},
  pagination: {
    paddingTop: 20,
  },
});
