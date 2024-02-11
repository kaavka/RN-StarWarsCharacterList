import {View, ActivityIndicator, Text} from 'react-native';
import {styles} from './styles';

export const LoadingIndicator: React.FC = () => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size="large" color="#0000ff" />
    <Text style={styles.loadingText}>Loading...</Text>
  </View>
);
