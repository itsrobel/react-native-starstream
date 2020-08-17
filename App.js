import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { GameEngine } from "react-native-game-engine";
import Entities from "./entities/";
import Systems from "./systems";
const App = () => {
  const [running, setRunning] = useState(true);

  let gameEngine = null;
  console.disableYellowBox = true;

  return (
    <View style={styles.container}>
      <GameEngine
        ref={(ref) => {
          gameEngine = ref;
        }}
        style={styles.gameContainer}
        systems={Systems}
        entities={Entities()}
        running={running}
      >
        <StatusBar hidden={true} />
      </GameEngine>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeeeee",
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
