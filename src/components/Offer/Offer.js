// Offer.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faUtensils, faMapMarkerAlt, faStar,faHiking  } from '@fortawesome/free-solid-svg-icons'; 
import { faCalendarAlt, faClipboardList  } from '@fortawesome/free-solid-svg-icons';
import './Offer.css';

const Offer = ({ offers, heading }) => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle card click
  const handleCardClick = (offer) => {
    navigate(`/place-details`, { state: { offer } });
  };

  return (
    <div className="offer-container">
      <h2 className="offer-heading">{heading}</h2>
      <div className="offer-cards">
        {offers.map((offer, index) => (
          <div className="offer-card" key={index} onClick={() => handleCardClick(offer)}>
            <img src={offer.imgSrc} alt={offer.title} className="offer-image" />
            <div className="offer-details">
              <h3 className="offer-title">{offer.title}</h3>
              <p className="offer-price">{offer.price}</p>
              <p className="offer-info">
              <FontAwesomeIcon icon={faCalendarAlt } className="offer-info-icon" /> 
                { offer.totalDays} Days / {offer.totalNights} Nights
              </p> 
              <p className="offer-travel-via" style={{display:'none'}}>
                <FontAwesomeIcon icon={faCar} /> Travel via: {offer.travelVia}
              </p> 
              <p className="offer-activities">
                <FontAwesomeIcon icon={faHiking} className="offer-info-icon"/> Activities: {offer.activities}
              </p> 
              <p className="offer-meals" style={{display:'none'}}>
                <FontAwesomeIcon icon={faUtensils} /> Meals: {offer.meals}
              </p>
                <p className="offer-location">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="offer-info-icon"/> {offer.location}
              </p>
              <p className="offer-rating" style={{display:'none'}}>
                <FontAwesomeIcon icon={faStar} /> Rating: {offer.rating}
              </p> 
              <p className="offer-description">
              <FontAwesomeIcon icon={faClipboardList } className="offer-info-icon"/>
                {offer.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
