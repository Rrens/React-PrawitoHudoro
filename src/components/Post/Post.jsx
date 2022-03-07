import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" />
      </div>
      <div className="content">
        <div className="title">{props.data.title}</div>
        <div className="desc">{props.data.body}</div>
        <button
          className="remove"
          onClick={() => {
            props.remove(props.data.id);
          }}
        >
          Choose
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

export default Post;
