import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  safe_container: {
    flex: 1,
  },
  scroll_container: {
    flex: 1,
  },
  scroll_container_content: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 20,
  },
  fansContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  fansText: {
    fontSize: 18,
    marginRight: 10,
  },
  clearButton: {
    borderWidth: 1,
    borderColor: COLORS.red,
    padding: 5,
    borderRadius: 5,
    opacity: 0.8,
  },
  clearButtonText: {
    color: COLORS.red,
  },
  card_container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    elevation: 2,
  },
  search: {
    marginBottom: 10,
  },
  pagination: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    marginTop: 10,
  },
});
