import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { randomColorGenerator } from "../../utils";
import Button from "../Common/Button";

const Home = ({ navigation }) => {
  const [buttonColor, setButtonColor] = useState('#841584');

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        color={buttonColor}
        onPress={() => setButtonColor(randomColorGenerator())}
        title={buttonColor}
        accessibilityLabel={undefined}
      />
      <Button
        title="Go to Game"
        onPress={() => navigation.navigate('Game')}
        color={undefined}
        accessibilityLabel={undefined}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
