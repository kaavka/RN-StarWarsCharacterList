import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    padding: 5,
  },
  backButtonText: {
    fontSize: 20,
  },
});
