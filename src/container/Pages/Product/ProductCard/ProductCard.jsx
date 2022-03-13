// import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./ProductCard.css";

class ProductCard extends Component {
  state = {
    order: 10,
  };

  handleCounterChange = (value) => {
    this.props.onCounterChange(value);
  };

  handlePlus = () => {
    this.setState(
      {
        order: (this.state.order += 1),
      },
      (value) => {
        this.handleCounterChange(this.state.order);
      }
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: (this.state.order -= 1),
        },
        (value) => {
          this.handleCounterChange(this.state.order);
        }
      );
    } else {
      alert(document.domain);
    }
  };

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/SmKmuPrbYP.jpg"
            alt=""
          />
        </div>
        <div className="product-title">barang-barang</div>
        <div className="product-price">Rp 410.000</div>
        <div className="counter">
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
          <input type="text" value={this.state.order} />
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
