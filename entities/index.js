import Ship from "../components/Ship";
import Wall from "../components/Wall";
import Bullet from "../components/Bullet";

import Matter from "matter-js";
import Constants from "../Constants.js";
Matter.Common.isElement = () => false; //-- Overriding this function because the original references HTMLElement

let engine = Matter.Engine.create({ enableSleeping: false });
let world = engine.world;
/*
const renderblocks = () => {
  const blocklist = [400, 500, 600];
  //return blocklist.map((i) => {
  return {
    Bullet: Bullet(
      world,
      "black",
      {
        x: Constants.MAX_WIDTH / 2,
        y: Constants.MAX_HEIGHT - Constants.MAX_HEIGHT / 5,
      },
      { height: Constants.BOX_SIZE, width: Constants.BOX_SIZE }
    ),
  };
  // });
};
*/
function renderblocks() {
  return {
    Bullet: Bullet(
      world,
      "black",
      {
        x: Constants.MAX_WIDTH / 2,
        y: Constants.MAX_HEIGHT - Constants.MAX_HEIGHT / 5,
      },
      { height: Constants.BOX_SIZE, width: Constants.BOX_SIZE }
    ),
  };
}
export default (restart) => {
  //-- Cleanup existing entities..
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }
  world.gravity.y = 0;

  return {
    physics: { engine: engine, world: world },
    Ship: Ship(
      world,
      "black",
      {
        x: Constants.MAX_WIDTH / 2,
        y: Constants.MAX_HEIGHT - Constants.MAX_HEIGHT / 5,
      },
      { height: Constants.BOX_SIZE, width: Constants.BOX_SIZE }
    ),
    Floor: Wall(
      world,
      "#00ffff",
      { x: Constants.MAX_WIDTH / 2, y: 0 },
      { height: 20, width: Constants.MAX_WIDTH }
    ),
    Ceiling: Wall(
      world,
      "#00ffff",
      { x: Constants.MAX_WIDTH / 2, y: Constants.MAX_HEIGHT },
      { height: 10, width: Constants.MAX_WIDTH }
    ),
    LeftWall: Wall(
      world,
      "#00ffff",
      { x: 0, y: Constants.MAX_HEIGHT / 2 },
      { height: Constants.MAX_HEIGHT, width: 10 }
    ),
    RightWall: Wall(
      world,
      "#00ffff",
      { x: Constants.MAX_WIDTH, y: Constants.MAX_HEIGHT / 2 },
      { height: Constants.MAX_HEIGHT, width: 10 }
    ),
    Enemies: [
      {
        Bullet: Bullet(
          world,
          "black",
          {
            x: Constants.MAX_WIDTH / 2,
            y: Constants.MAX_HEIGHT - Constants.MAX_HEIGHT / 5,
          },
          { height: Constants.BOX_SIZE, width: Constants.BOX_SIZE }
        ),
      },
    ],
  };
};
