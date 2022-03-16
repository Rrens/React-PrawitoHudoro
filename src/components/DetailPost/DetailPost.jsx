import React, { Component, Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

class DetailPost extends Component {
  state = {
    data: {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    },
  };

  getPostDataAPI = () => {
    const { id } = this.props.params;
    axios.get(`http://localhost:3001/posts/${id}`).then((DataAPI) => {
      console.log(DataAPI.data);
      this.setState({
        data: DataAPI.data,
      });
    });
  };

  componentDidMount() {
    this.getPostDataAPI();
  }
  render() {
    return (
      <Fragment>
        <h2>{`Judul: ${this.state.data.title}`}</h2>
        <p>{`Content: ${this.state.data.body}`}</p>
      </Fragment>
    );
  }
}

export default (props) => <DetailPost {...props} params={useParams()} />;
