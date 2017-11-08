import React from "react";
import CommentList from "./common/CommentList";

// ProductItem page component
export default class ProductItem extends React.Component {

  // render
  render() {
    return (
      <div className="page-product-item">
        <CommentList />
      </div>
    );
  }
}