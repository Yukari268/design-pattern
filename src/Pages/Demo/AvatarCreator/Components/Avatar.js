import React from 'react'
import "./Avatar.css";
import { Stage, Layer, Image, Ellipse, Circle } from 'react-konva';

const Avatar = (props) => {
  return (
    <Stage width='170' height='170' onClick={() => {
        const newCurrentAvatar = props.avatar.clone();
        props.setSource(newCurrentAvatar);
    }}> 
        <Layer>
          <Image
            x={0}
            y={0}
            width={170}
            height={170}
            image={props.avatar.themeImage}
          />
          <Ellipse
            x = {170/2}
            y = {170}
            radiusX={30}
            radiusY={45}
            fill= {props.avatar.bodyColor}
          />
          <Circle 
            x = {170/2}
            y = {200/2}
            radius={40}
            fill= {props.avatar.skinColor}
          />
        </Layer>
      </Stage>
  )
}

export default Avatar