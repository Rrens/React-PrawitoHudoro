import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
import HelloComponent from "./components/HelloComponent";
import Home from "./container/Home/Home";
import StateFullComponent from "./container/StateFullComponent";
import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<Home />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
