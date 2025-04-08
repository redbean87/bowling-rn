import { StyleSheet, Text, View } from 'react-native';

interface PinCountProps {
  display: number[];
  tenthFrame: boolean;
}

export const PinCount = ({ display = [], tenthFrame = false }: PinCountProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.count}>
        <Text>{display[0]}</Text>
      </View>
      <View style={styles.count}>
        <Text>{display[1]}</Text>
      </View>
      {tenthFrame && (
        <View style={styles.count}>
          <Text>{display[2]}</Text>
        </View>
      )}
    </View>
  );
};

export default PinCount;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  count: {
    flex: 1,
    alignItems: 'center',
  },
});
