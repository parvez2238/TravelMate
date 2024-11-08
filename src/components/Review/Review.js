/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './Review.css';
import reviews from './reviews.json'; // Importing review data

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3; // We want to show 3 reviews at a time

  // Move to the next set of reviews every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + reviewsPerPage) % reviews.length
      );
    }, 4000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [reviews.length]);

  // Get the current set of reviews to display
  const currentReviews = reviews.slice(
    currentIndex,
    currentIndex + reviewsPerPage
  );

  return (
    <div className="review-carousel-container">
      <h2>What Our Customers Say</h2>
      <div className="review-card-wrapper">
        {currentReviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.imgSrc} alt={review.name} className="review-img" />
            <div className="review-info">
              <div className="review-name">{review.name}</div>
              <div className="review-rating">{'★'.repeat(review.rating)}</div>
              <p className="review-text">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
