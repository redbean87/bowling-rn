import { StyleSheet, View } from "react-native";

import { circleBorderRadius } from "../../../../utils";

export const PinDown = () => {
  return <View style={styles.container} />;
};

export default PinDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: circleBorderRadius(),
    borderWidth: 1,
    paddingTop: '100%',
    width: '100%',
  },
});
