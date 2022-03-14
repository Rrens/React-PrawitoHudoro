import React, { Component, Fragment } from "react";
import "./BlogPost.css";

import Post from "../../../components/Post/Post";
import axios from "axios";
// import { Link, Navigate } from "react-router-dom";
// import { useNavigate } from "@reach/router";
import { useNavigate } from "react-router-dom";
// import navigate from ".";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
  };

  postDataToAPI = async () => {
    axios.post("http://localhost:3001/posts", this.state.formBlogPost).then(
      (res) => {
        console.log(res);
        this.getPostDataAPI();
      },
      (err) => {
        console.log("error: ", err);
      }
    );
  };

  getPostDataAPI = async () => {
    axios
      .get("http://localhost:3001/posts?_sort=id&_order=desc")
      .then((DataAPI) => {
        // console.log(DataAPI.data);
        this.setState({
          post: DataAPI.data,
        });
      });
  };

  removeDataHandler = (data) => {
    axios.delete(`http://localhost:3001/posts/${data}`).then((res) => {
      console.log(res);
      console.log(this.state.post);
      this.getPostDataAPI();
    });

    // console.log(data);
  };
  // removeDataHandler(data, e) {
  //   axios.delete(`http://localhost:3001/posts/${data}`).then((res) => {
  //     console.log(res);
  //     console.log(this.state.post);
  //     //getPostDataAPI();
  //   });

  //   // console.log(data);
  // }

  componentDidMount() {
    this.getPostDataAPI();
  }

  // Fetch API with fetch
  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((Response) => Response.json())
  //   .then((json) => {
  //     this.setState({
  //       post: json,
  //     });
  //   });
  //   fetch API with Axios
  // axios.get("http://localhost:3001/posts").then((DataAPI) => {
  //   console.log(DataAPI.data);
  //   this.setState({
  //     post: DataAPI.data,
  //   });
  // });

  handleFormChange = (event) => {
    // console.log("form Change", event.target.value);
    let title = event.target.value;
    // mencopy formBlogPost agar menjadi object, ketika this.state.formBlogPost berisi value tidak berupa object, sehingga perlu di copy agar bentuknya tetap object
    let newFormBlogSpot = { ...this.state.formBlogPost };
    // console.log("init state", this.state.formBlogPost);
    // console.log("new Value", newFormBlogSpot);
    let timestamp = new Date().getTime();
    newFormBlogSpot["id"] = timestamp;
    // merubah value object berasal nama (title, body)
    newFormBlogSpot[event.target.name] = event.target.value;

    this.setState(
      {
        // mengambil formBlogPost dari newFormBlogPost
        formBlogPost: newFormBlogSpot,
      },
      () => {
        // console.log("value obj formBlogPost", this.state.formBlogPost);
      }
    );
  };

  handleSubmit = () => {
    // console.log(this.state.formBlogPost);
    this.postDataToAPI();
  };

  // handleDetail = (id) => {
  //   // <Link to="/">Home</Link>;
  //   // let history = useNavigate();
  //   // this.props.history.push(`/detail/${id}`);
  //   // this.props.history.push(`/detail/${id}`);
  //   // <Link to={`/detail/${id}`} />;
  //   // history(`/detail/${id}`);
  //   // history("/home");
  //   // history(`?term=${searchValue}`);

  //   const navigate = useNavigate();

  //   navigate(`/home`);

  //   // <Navigate to="/" replace={true} />;
  //   console.log(this.props);
  // };

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="add Title"
            onChange={this.handleFormChange}
          />
          <label htmlFor="body">Blog Content</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            placeholder="add Blog Content"
            onChange={this.handleFormChange}
          />
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map((post) => {
          return (
            <Post
              key={post.id}
              data={post}
              remove={this.removeDataHandler}
              choose={this.getPostDataAPI}
              // Detail={this.handleDetail}
            />
          );
        })}
        {/* {console.log(this.state.post)} */}
      </Fragment>
    );
  }
}

// function MyBackButton() {
//   const navigation = useNavigate();

//   return (
//     <button
//       title="back"
//       onClick={() => {
//         navigation.goBack();
//       }}
//     />
//   );
// }

// function navigate(props) {
//   const navigation = useNavigate();
//   return <MyBackButton {...props} navigation={navigation} />;
// }

export default BlogPost;
