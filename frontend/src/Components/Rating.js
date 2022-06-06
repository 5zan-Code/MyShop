import React from "react";
import PropTypes from 'prop-types'



const Rating = ({ value, numReviews, color }) => {
 
  return (
    <div className="rating">
      {console.log('value from rating ',value)}
  
      <span>
        <i style={{color}}
          className={
            value >= 1
              ? "fa-solid fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 2
              ? "fa-solid fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 3
              ? "fa-solid fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>{numReviews && numReviews}</span>
    </div>
  );
};
Rating.defaultProps = {
  color : '#f8e825'
}
Rating.propTypes = {
  value : PropTypes.number.isRequired,
  numReviews: PropTypes.string.isRequired,
  color: PropTypes.string
}

export default Rating;
