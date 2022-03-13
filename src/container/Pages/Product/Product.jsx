import React, { Component, Fragment } from "react";
import ProductCard from "./ProductCard/ProductCard";
import "./Product.css";

class Product extends Component {
  state = {
    order: 10,
  };

  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img
              src="https://kampusmerdeka.kemdikbud.go.id/static/media/logo-pendidikan.92aef756.webp"
              alt="Kemdikbud"
            />
          </div>
          <div className="troley">
            {/* <img src="https://img2.pngdownload.id/20180528/gf/kisspng-shopping-bags-trolleys-shopping-cart-logo-clip-a-online-shop-5b0c34bb57cc75.7415233215275265873596.jpg" /> */}
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <ProductCard
          onCounterChange={(value) => this.handleCounterChange(value)}
        />
      </Fragment>
    );
  }
}

export default Product;
