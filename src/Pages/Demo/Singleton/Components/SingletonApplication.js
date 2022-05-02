import React, { useRef } from "react";
import "./SingletonApplication.css";
import { useState } from "react";

const SingletonApplication = () => {
  const [imgUrl, setImgUrl] = useState("");
  function wrapText(context, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = context.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }

  const printText = (e) => {
    var tCtx = document.getElementById("textCanvas").getContext("2d"); //Hidden canvas
    var inputText = document.getElementById("inputbox-1").value;
    // Text input element
    tCtx.font = "20px Georgia";
    tCtx.fillStyle = "black";
    tCtx.fillRect(0, 0, tCtx.canvas.width, tCtx.canvas.height);
    tCtx.fillStyle = "white";
    wrapText(tCtx,inputText,10,10,680,16);
    setImgUrl(tCtx.canvas.toDataURL());
  };

  return (
    <div className="singleton-application">
      <div className="singleton-application-name">Text To PNG</div>
      <div className="singleton-application-section-1">
        <textarea
          className="singleton-application-section-1 inputbox"
          id="inputbox-1"
        ></textarea>
        <button
          onClick={(e) => {
            printText(e);
          }}
          className="singleton-application-section-1-button"
        >
          Convert
        </button>
      </div>
      <div className="singleton-application-section-2">
        <textarea
          className="singleton-application-section-2 inputbox"
          id="inputbox-2"
        ></textarea>
        <button className="singleton-application-section-2-button">
          Convert
        </button>
      </div>
      <canvas id="textCanvas" height="fit-content"></canvas>
      <img id="image" src={imgUrl}></img>
    </div>
  );
};

export default SingletonApplication;
