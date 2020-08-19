import React from "react";
import { View } from "react-native";
import { array, object, string } from "prop-types";

import Matter from "matter-js";

const Bullet = (props) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  console.log(props);
  return (
    <View
      style={[
        {
          position: "absolute",
          left: x,
          top: y,
          width: width,
          height: height,
          backgroundColor: props.color,
        },
      ]}
    />
  );
};

export default (world, color, pos, size) => {
  const initbullet = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { isStatic: true, friction: 1 }
  );
  Matter.World.add(world, [initbullet]);

  return {
    body: initbullet,
    size: [size.width, size.height],
    color: color,
    renderer: <Bullet />,
  };
};
Bullet.propTypes = {
  size: array,
  bod: object,
  color: string,
};
