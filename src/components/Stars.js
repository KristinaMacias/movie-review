import ReactStars from "react-stars";
import React from "react";
import { render } from "react-dom";

export default class Stars extends React.Component {
    //create a state for stars
    constructor(props) {
        super(props);
        this.state = {
            rating: 0
        };
    }

    //handle change for stars
    handleChange = (newRating) => {
        this.setState({ rating: newRating });
    }

    render() {
        return (
            <div>
                <ReactStars
                    count={5}
                    onChange={this.handleChange}
                    size={24}
                    color2={"#ffd700"}
                />
            </div>
        );
    }

}
