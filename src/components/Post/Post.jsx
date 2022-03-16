import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Post = (props) => {
  let navigate = useNavigate();
  // let id   = useParams();

  // console.log(props);
  function handleDetail(id) {
    navigate(`/detail/${id}`);
  }

  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" />
      </div>
      <div className="content">
        <p
          className="title"
          onClick={() => {
            handleDetail(props.data.id);
          }}
        >
          {props.data.title}
        </p>
        <div className="desc">{props.data.body}</div>
        <button
          className="update"
          onClick={() => {
            props.update(props.data);
          }}
        >
          Update
        </button>
        <button
          className="remove"
          onClick={() => {
            props.remove(props.data.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

const methods = {
  componentDidMount(props) {
    console.log("I mounted! Here are my props: ", props);
  },
};

export default Post;
