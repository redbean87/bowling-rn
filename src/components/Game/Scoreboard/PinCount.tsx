import { StyleSheet, Text, View } from 'react-native';

export const PinCount = ({ display, tenthFrame }) => {
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

PinCount.defaultProps = {
  display: [],
  tenthFrame: false,
};

export default PinCount;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  count: {
    flex: 1,
    alignItems: 'center',
  },
});
