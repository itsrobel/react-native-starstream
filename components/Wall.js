import React from "react";
import { View, Image } from "react-native";
import { array, object, string } from "prop-types";

import Matter from "matter-js";

const Wall = (props) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
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
  const initwall = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { isStatic: true, friction: 1 }
  );
  Matter.World.add(world, [initwall]);

  return {
    body: initwall,
    size: [size.width, size.height],
    color: color,
    renderer: <Wall />,
  };
};
Wall.propTypes = {
  size: array,
  bod: object,
  color: string,
};
