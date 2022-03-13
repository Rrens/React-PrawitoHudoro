import React, { Component, Fragment } from "react";
import YoutubeComp from "../../../components/YoutubeComp/YoutubeComp";

class Youtube extends Component {
  render() {
    return (
      <Fragment>
        <p>Yotube</p>
        <hr />
        <YoutubeComp title="judul" time="1919" desc="deskripsi" />
      </Fragment>
    );
  }
}
export default Youtube;
