import { useLocation } from 'react-router-dom';
import './PlaceDetails.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad, faMapMarkerAlt, faHiking } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faUtensils } from '@fortawesome/free-solid-svg-icons';

const PlaceDetails = () => {
    const location = useLocation();
    const { offer } = location.state; // Accessing the passed offer data

    return (
        <div className="place-details-page">
            <div className="place-details-container">
                <div className="place-details-left">
                    <img src={offer.imgSrc} alt={offer.title} className="place-details-image" />
                    <div className="details-subsection">
                        <h2>{offer.title}</h2>
                        <p className="price">{offer.price}</p>
                        <div className="details-info">
                            <p>
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                {offer.totalDays} days / {offer.totalNights} night
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faRoad} />
                                {offer.travelVia}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faHiking} />
                                {offer.activities}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                {offer.location}
                            </p>
                            <p className="meals-description">
                                <FontAwesomeIcon icon={faUtensils} />
                                {offer.meals}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="place-details-right">
                    <h2>Select Your Tour Plan</h2><br/><br/>
                    <div className="calendar-dropdown">
                        <div className="date-selection">
                            <div className="date-input">
                                <label htmlFor="start-date">Start Date:</label>
                                <input type="date" id="start-date" />
                            </div>
                            <div className="date-input">
                                <label htmlFor="end-date">End Date:</label>
                                <input type="date" id="end-date" />
                            </div>
                        </div>
                    </div>
                    <div className="person-dropdown">
                        <div className="dropdown-input">
                            <label htmlFor="adults">Adults:</label>
                            <select id="adults" className="custom-select">
                                <option >---Select---</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                            </select>
                        </div>
                        <div className="dropdown-input">
                            <label htmlFor="children">Children:</label>
                            <select id="children" className="custom-select">
                            <option >---Select---</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                    <p className="experience-description">
                       {offer.description}
                    </p><br/>
                    <button className="book-now-button">Book Now</button>
                    <div className="rating-section">
                        <h3>Visitor Rating</h3>
                        <p>
                            {'★'.repeat(Math.floor(offer.rating))}{'☆'.repeat(5 - Math.floor(offer.rating))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;
