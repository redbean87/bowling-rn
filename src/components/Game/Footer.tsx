import { StyleSheet, View } from "react-native";

import Button from "../Common/Button";

const Footer = ({
  isStrikeBall,
  onNextRollPress,
  onStrikePress,
  onSparePress,
}) => {
  return (
    <View style={styles.container}>
      {isStrikeBall ? (
        <View style={styles.strike}>
          <Button onPress={onStrikePress} title={'Strike'} />
        </View>
      ) : (
        <View style={styles.strike}>
          <Button onPress={onSparePress} title={'Spare'} />
        </View>
      )}
      <View style={styles.next}>
        <Button onPress={onNextRollPress} title={'Next Roll'} />
      </View>
    </View>
  );
};

Footer.defaultProps = {
  isStrikeBall: true,
  onNextRollPress: () => {},
  onSparePress: () => {},
  onStrikePress: () => {},
  selectedFrame: 1,
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  strike: {
    flex: 1,
  },
  game: {
    flex: 1,
  },
  next: {
    flex: 1,
  },
});
