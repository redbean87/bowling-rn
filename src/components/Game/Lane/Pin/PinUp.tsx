import { StyleSheet, View } from 'react-native';

import { pinDiameter, pinRadius } from '../../../../utils';

export const PinUp = () => {
  return (
    <View style={styles.body}>
      <View style={styles.head} />
    </View>
  );
};

export default PinUp;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: pinDiameter(),
    borderWidth: 1,
    width: '100%',
    height: '100%',
  },
  head: {
    borderRadius: pinRadius(),
    borderWidth: 1,
    width: pinRadius(),
    height: pinRadius(),
    margin: pinRadius() / 2 - 1,
  },
});
