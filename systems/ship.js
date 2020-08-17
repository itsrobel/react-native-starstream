import Matter from "matter-js";

const UpdateShip = (entities, { touches, time }) => {
  const engine = entities.physics.engine;

  touches
    .filter((t) => t.type === "press")
    .forEach((t) => {
      Matter.Body.setVelocity(entities.Ship.body, {
        x: entities.Ship.body.velocity.x,
        y: -3,
      });
    });
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default UpdateShip;
