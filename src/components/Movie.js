import React from "react";
//import Stars from "./Stars";
import ReviewForm from "./ReviewForm";

export default class Movie extends React.Component {
  //state
  render() {
    return (
      <div className="container-fluid m-2">
        <div className="card mb-4 bg-dark text-light p-3">
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <img
                  src={this.props.image}
                  alt="movie poster"
                  className="mb-5 img-thumbnail"
                />
              </div>
              <div className="col-6">
                <h2 className="mb-5">{this.props.name}</h2>
                <p className="mb-4">Description: {this.props.description}</p>
                <p className="mb-2 border-bottom">
                  Release Date: {this.props.dateReleased}
                </p>
                <p className="mb-2 border-bottom">
                  Genre(s): {this.props.genre}
                </p>
                <p className="mb-2 border-bottom">
                  Rating: {this.props.ageRating}
                </p>
                <br />
                <ReviewForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
