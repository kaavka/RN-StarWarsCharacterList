import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safe_container: {
    flex: 1,
  },
  scroll_container: {
    flex: 1,
  },
  scroll_container_content: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  card_container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    elevation: 2,
  },
  search: {
    marginBottom: 10,
  },
  pagination: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
});
