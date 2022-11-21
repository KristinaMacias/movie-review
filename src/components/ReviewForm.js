import React from "react";
import ReviewList from "./ReviewList";
import StarsRating from "./StarsRating";
import ReactStars from "react-stars";

export default class ReviewForm extends React.Component {
  //create a state for review form
  constructor(props) {
    super(props);
    this.state = {
      review: "", //user input
      reviews: [], //array of reviews
      stars: 0, //star rating
    };
  }

  //handle change for review form
  handleChange = (event) => {
    this.setState({ review: event.target.value });
  };

  //handle change for stars
  handleStarsChange = (newRating) => {
    this.setState({ stars: newRating });
  };

  //handle submit for review form
  handleSubmit = (event) => {
    event.preventDefault();
    //create a new review object
    const newReview = {
      review: this.state.review,
      stars: this.state.stars,
    };
    //add new review to array of reviews
    this.setState({
      reviews: [...this.state.reviews, newReview],
      review: "",
      stars: 0,
    });
  };

  render() {
    return (
      <div>
        {this.state.reviews.length === 0 ? (
          <div>
            <h2 className="mb-5">There are no reviews yet.</h2>
          </div>
        ) : (
          // review list component
          <div>
            <h2>Reviews:</h2>
            {/* mapping reviews state to ReviewList Component */}
            {this.state.reviews.map((review, index) => (
              <ReviewList
                review={review.review}
                stars={review.stars}
                index={index}
              />
            ))}
          </div>
        )}
        {/* review form card */}
        <div className="card mb-4">
          <div className="card-body bg-secondary">
            <h2>Leave a Review:</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="review">Review:</label>
                <input
                  type="text"
                  className="form-control"
                  id="review"
                  value={this.state.review}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="stars">Stars:</label>
                <StarsRating
                  stars={this.state.stars}
                  onChange={this.handleStarsChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
