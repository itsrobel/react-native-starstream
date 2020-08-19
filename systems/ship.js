import Matter from "matter-js";
import Constants from "../Constants.js";

const UpdateShip = (entities, { touches, time }) => {
  const engine = entities.physics.engine;
  let ship = entities.Ship.body;
  touches.forEach((t) => {
    let touch_pos = t.event.locationX;
    if (touch_pos > Constants.MAX_WIDTH / 2) {
      Matter.Body.setVelocity(ship, {
        x: 3,
        y: ship.velocity.y,
      });
    } else {
      Matter.Body.setVelocity(ship, {
        x: -3,
        y: ship.velocity.y,
      });
    }

    // Matter.Body.setVelocity(entities.Ship.body, {
    //   x: entities.Ship.body.velocity.x,
    //  y: entities.Ship.body.velocity.y, //-3
    //});
  });

  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default UpdateShip;
