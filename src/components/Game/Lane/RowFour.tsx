import { StyleSheet, View } from "react-native";

import Pin from "./Pin";

const Four = ({ handlePinPress, pins }) => {
  const [pinSeven, pinEight, pinNine, pinTen] = pins;
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Pin pin={pinSeven} onPinPress={handlePinPress} />
      </View>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinEight} onPinPress={handlePinPress} />
      </View>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinNine} onPinPress={handlePinPress} />
      </View>
      <View style={styles.column} />
      <View style={styles.column}>
        <Pin pin={pinTen} onPinPress={handlePinPress} />
      </View>
    </View>
  );
};

Four.defaultProps = {
  pins: [],
  handlePinPress: () => {},
};

export default Four;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    justifyContent: 'center',
  },
});
