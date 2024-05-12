import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRatings = () => {
    const [rating, setRating] = useState(0); 

    const handleClick = (starIndex) => {
        if (starIndex === rating) {
            setRating(0);
        } else {
            setRating(starIndex);
        }
    };

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const starValue = index + 1;

                return (
                    <FaStar
                        key={index}
                        className="star"
                        color={starValue <= rating ? '#ffc107' : '#e4e5e9'}
                        onClick={() => handleClick(starValue)}
                    />
                );
            })}
        </div>
    );
};

export default StarRatings;
