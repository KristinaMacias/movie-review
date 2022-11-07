import React from "react";
import ReviewList from "./ReviewList";
import ReactStars from "react-stars";


export default class ReviewForm extends React.Component {
  //create a state for review form
  constructor(props) {
    super(props);
    this.state = {
      review: "", //user input
      reviews: [], //array of reviews
      stars: 0 //number of stars
    };
  }

  //handle change for review form
  handleReviewChange = (event) => {
    this.setState({ 
        review: event.target.value
    });
  };

  


  //handle submit for review form
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      review: "",
      reviews: [...this.state.reviews, this.state.review],
    });
    
    //clear text area after submit - i think there's a better way to do this
    document.getElementById("exampleFormControlTextarea1").value = "";
    
  };

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            {/* text area for user input */}
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={this.handleReviewChange}
            ></textarea>

            {/* submit button */}
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>

        <h1 className="lead-6 mt-5">Reviews</h1>
    
    {/* map through reviews array and display each review */}
        {this.state.reviews.length === 0 ? (
            <h5>Be the first to leave a review!</h5> 
        ) : (
            this.state.reviews.map((review, index) => (
                <ReviewList key={index} review={review} />
            ))
        )}
      </div>
    );
  }
}
