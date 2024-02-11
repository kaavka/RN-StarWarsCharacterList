import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {styles} from './styles';

const FansViewer: React.FC = () => {
  const maleFansCount = useSelector(
    (state: RootState) => state.fans.maleFans.length,
  );
  const femaleFansCount = useSelector(
    (state: RootState) => state.fans.femaleFans.length,
  );
  const otherFansCount = useSelector(
    (state: RootState) => state.fans.otherFans.length,
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Male Fans</Text>
        <Text style={styles.count}>{maleFansCount}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Female Fans</Text>
        <Text style={styles.count}>{femaleFansCount}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Other Fans</Text>
        <Text style={styles.count}>{otherFansCount}</Text>
      </View>
    </View>
  );
};

export default FansViewer;
