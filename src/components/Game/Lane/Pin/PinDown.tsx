import { StyleSheet, View } from 'react-native';

import { pinDiameter } from '../../../../utils';

export const PinDown = () => {
  return <View style={styles.container} />;
};

export default PinDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: pinDiameter(),
    borderWidth: 1,
    width: '100%',
    height: '100%',
  },
});
