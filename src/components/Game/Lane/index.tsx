import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { createSelector } from "reselect";

import useGame from "../../../api";
import { GameContext } from "../game-context";
import RowFour from "./RowFour";
import RowOne from "./RowOne";
import RowThree from "./RowThree";
import RowTwo from "./RowTwo";

const Lane = () => {
  const { frame } = useContext(GameContext);

  if (!frame) {
    return null;
  }

  const [rowFour, rowThree, rowTwo, rowOne] = pinsByRow(frame);

  return (
    <View style={styles.container}>
      <RowFour pins={rowFour} />
      <RowThree pins={rowThree} />
      <RowTwo pins={rowTwo} />
      <RowOne pin={rowOne} />
    </View>
  );
};

export default Lane;

const pinsSelector = (frame) => frame.pins;

const pinsByRow = createSelector(pinsSelector, (pins = []) => {
  return [pins.slice(6), pins.slice(3, 6), pins.slice(1, 3), pins[0]];
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'tan',
  },
});
