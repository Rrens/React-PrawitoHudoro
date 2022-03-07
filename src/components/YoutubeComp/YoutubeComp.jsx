import React from "react";
import "./YoutubeComp.css";

const YoutubeComp = (props) => {
  return (
    <div class="card">
      <img src="https://i.ytimg.com/vi/tET38Ldp8Dg/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2Voh4CF0rfbhl1oDrU0Zb7T8dVw" />
      <p class="title">{props.title}</p>
      <p class="time">{props.time}</p>
      <p class="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "00.00",
  title: "No Title Found",
  desc: "no Description included",
};

export default YoutubeComp;
