import Ship from "../components/Ship";
import Wall from "../components/Wall";

import Matter from "matter-js";
import { Dimensions } from "react-native";

Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement

export default (restart) => {
  //-- Cleanup existing entities..
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0.25;
  const boxSize = 50;

  return {
    physics: { engine: engine, world: world },
    Ship: Ship(
      world,
      "black",
      { x: 220, y: 400 },
      { height: boxSize, width: boxSize }
    ),
    Floor: Wall(
      world,
      "#00ffff",
      { x: windowWidth / 2, y: 0 },
      { height: 100, width: windowWidth }
    ),
    Ceiling: Wall(
      world,
      "#00ffff",
      { x: windowWidth / 2, y: windowHeight },
      { height: 100, width: windowWidth }
    ),
  };
};
