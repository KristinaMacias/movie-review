import ReactStars from "react-stars";
import React, { useEffect } from "react";
import { useState } from "react";


export default function StarsRating(props) {
    //import state from props for stars to use in this component
    const [stars, setStars] = useState(props.stars);

    //handle change for stars
    const handleChange = (newRating) => {
        setStars(newRating);
    };

    //what is useEffect for? 
    useEffect(() => {
        props.onChange(stars); //update stars in parent component
    }, [stars]); //only update when stars changes


  return (
    <div>
      <ReactStars count={5} onChange={handleChange} size={24} color2={"#ffd700"} />
    </div>
  );
}

