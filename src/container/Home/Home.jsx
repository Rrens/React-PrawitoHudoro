import React, { Fragment, Component } from "react";
import Product from "../Pages/Product/Product";
import BlogPost from "../Pages/BlogPost/BlogPost";
import Youtube from "../Pages/Youtube/Youtube";
// import DetailPost from "../../components/DetailPost/DetailPost";
import DetailPost from "../../components/DetailPost/DetailPost";
import { Routes, Route, Link } from "react-router-dom";
function Home() {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Product">Product</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact element={<Youtube />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Blog" element={<BlogPost />} />
        <Route path="/detail/:id" element={<DetailPost />} />
      </Routes>
    </Fragment>
  );
}

export default Home;
