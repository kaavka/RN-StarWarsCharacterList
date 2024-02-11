import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  safe_container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scroll_container: {
    flex: 1,
  },
  scroll_container_content: {
    flexGrow: 1,
    paddingBottom: 20, // Adjust as needed
  },
  container: {
    flex: 1,
    padding: 20,
  },
  search: {
    marginBottom: 15,
  },
  pagination: {
    marginTop: 15,
  },
});
