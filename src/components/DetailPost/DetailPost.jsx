import React, { Component, Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useLocalObservable } from "mobx-react-lite";

// export default function DetailPost() {
//   //   const [GetState, setState] = useState([
//   //     {
//   //       userId: 1,
//   //       id: 1,
//   //       title: "",
//   //       body: "",
//   //     },
//   //   ]);

//   const meta = useLocalObservable(() => ({
//     userId: 1,
//     id: 1,
//     title: "",
//     body: "",
//   }));

//   //   const testing = console.log(GetState);
//   let { id } = useParams();
//   useEffect(async () => {
//     axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
//       console.log(res.data.id);
//       meta.id = res.data.id;
//       meta.title = res.data.title;
//       meta.body = res.data.body;
//     });
//   }, []);
//   //   console.log(props);

//   //   useEffect(() => {
//   //     // const runEffect = async () => {
//   //     //   const result =
//   //     // };
//   //     axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
//   //       //   console.log(res.data);
//   //       setState(res);
//   //     });
//   //     // setState(result);
//   //   });

//   //   function get(ID) {
//   //     axios.get(`http://localhost:3001/posts/${id}`).then((DataAPI) => {
//   //       //   console.log(DataAPI.data);
//   //       setState({ name: DataAPI.data.title }, { body: DataAPI.data.body });
//   //     });
//   //   }
//   console.log(meta.body);
//   return (
//     <Fragment>
//       <h2>{`Judul: ${meta.title}`}</h2>
//       <p>{`Content: ${meta.body}`}</p>
//     </Fragment>
//   );
//   //   <div>DetailPost</div>;
// }

class DetailPost extends Component {
  //   iyaa = (haloo) => {
  //     const meta = useLocalObservable(() => ({
  //       userId: 1,
  //       id: 1,
  //       title: "",
  //       body: "",
  //     }));
  //   };

  state = {
    data: {
      userId: 1,
      id: 1,
      title: "",
      body: "",
    },
  };

  //   tes = () => {
  //     let { id } = this.props.match.params.id;
  //     return tes;
  //   };

  getPostDataAPI = async () => {
    const { id } = this.props.params;
    axios.get(`http://localhost:3001/posts/${id}`).then((DataAPI) => {
      console.log(DataAPI.data);
      this.setState({
        data: DataAPI.data,
      });
    });
  };

  componentDidMount() {
    // let { id } = useParams();
    // console.log(halo());
    // const { id } = this.props.params;
    this.getPostDataAPI();
    // axios.get(`http://localhost:3001/posts/${id}`).then((res) => {
    //   this.setState({
    //     data: res,
    //   });
    //   console.log(`INi STATE: ${this.props.data}`);
    // });
    // console.log({ id });
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
