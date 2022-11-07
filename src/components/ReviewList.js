import React from "react";
import Stars from "./Stars";
export default class ReviewList extends React.Component {
  render() {
    return (
      <div className="card mb-4">
        <div className="card-body bg-secondary">
          <h2>{this.props.review}</h2>
          <Stars />
        </div>
      </div>
    );
  }
}
