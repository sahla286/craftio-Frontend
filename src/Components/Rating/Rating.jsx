import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ value, text }) => {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'gold' }} />);
    } else if (value >= i - 0.5) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalf} style={{ color: 'gold' }} />);}
       else {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} style={{ color: 'white' }} />);
    }
  }
  return (
    <div className='rating'>
      {stars}
      {/* <span>{text && text}</span> */}
    </div>
  );
};

export default Rating;