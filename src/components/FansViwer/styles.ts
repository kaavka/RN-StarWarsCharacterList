import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    elevation: 5,
    minWidth: 110,
    marginVertical: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  count: {
    fontSize: 20,
  },
});
