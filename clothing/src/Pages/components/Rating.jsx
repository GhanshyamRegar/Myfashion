import React, { useState } from 'react';

const Rating = ({ rating, reviews, productId }) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [totalReviews, setTotalReviews] = useState(reviews);
  const [rated, setRated] = useState(false); // To ensure one-time rating

  const handleRating = (newRating) => {
    if (rated) return;
    
    // Update rating logic
    const newTotalReviews = totalReviews + 1;
    const newAverageRating = ((currentRating * totalReviews) + newRating) / newTotalReviews;

    setCurrentRating(newAverageRating);
    setTotalReviews(newTotalReviews);
    setRated(true);

    // Here, make an API call to save the rating in the backend
    // Example: axios.post('/api/rate', { productId, rating: newRating, userId });
  };

  return (
    <div className="rating">
      <div className="stars">
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} onClick={() => handleRating(star)}>{star <= currentRating ? '★' : '☆'}</span>
        ))}
      </div>
      <p>{currentRating.toFixed(1)} ({totalReviews} Reviews)</p>
    </div>
  );
};

export default Rating;
