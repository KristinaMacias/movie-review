import React from "react";
import ReactStars from "react-stars";

export default class ReviewList extends React.Component {
  render() {
    return (
      <div className="card mb-4">
        <div className="card-body bg-info">
          <p>{this.props.review}</p>
          <ReactStars
            //center in card
            className="d-flex justify-content-center"
            count={5}
            value={this.props.stars} //set value to stars from props (state from parent component)
            size={24}
            color2={"#ffd700"}
            edit={false}
          />
        </div>
      </div>
    );
  }
}
