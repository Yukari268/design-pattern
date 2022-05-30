import React, { useRef, useState } from "react";
import { Stage, Layer, Rect, Text, Ellipse, Circle , Image} from "react-konva";
import "./FinalAvatar.css";

const DownloadButton = (props) => {
  function downloadURI() {
    var link = document.createElement("a");
    link.download = "avatar.png";
    link.href = props.download.current.toDataURL();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div
      className="download-button"
      onClick={() => {
        downloadURI(props.download);
      }}
    >
      Download
    </div>
  );
};

const FinalAvatar = (props) => {
  const canvasRef = useRef(null);
  const [name, setName] = useState("");
  return (
    <div className="final-avatar-section">
      <div className="user-input-section">
        <Stage width={170} height={170}>
          <Layer ref={canvasRef}>
            <Image x={0} y={0} width={170} height={170} image={props.avatar.themeImage}/>
            <Ellipse
              x={170 / 2}
              y={170}
              radiusX={50}
              radiusY={70}
              fill={props.avatar.bodyColor}
            />
            <Circle
              x={170 / 2}
              y={170 / 2}
              radius={50}
              fill={props.avatar.skinColor}
            />
            <Text
              x={170 / 2 - 20}
              y={170 / 2 - 10}
              text= {name}
              fill="black"
              fontSize={32}
            />
          </Layer>
        </Stage>
        <div className="user-input">
          <label htmlFor="name-input">Ten cua ban:</label>
          <input id="name-input" type={"text"} maxLength={2} onChange={(e) => {
              setName(e.target.value);
          }}></input>
        </div>
      </div>
      <DownloadButton download={canvasRef}></DownloadButton>
    </div>
  );
};

export default FinalAvatar;
