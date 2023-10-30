import React from 'react';

import "./Reviews.css"

import face1 from "../../assets/face1.jpg"
import face2 from "../../assets/face2.jpg"
import face3 from "../../assets/face3.png"
import face4 from "../../assets/face4.png"
import face5 from "../../assets/face5.PNG"
import face6 from "../../assets/face6.PNG"
const Reviews = () => {

  
const clientReviews = [
  {
    name: 'Sophia Roberts ',
    image: face1,
    quote: 'Moonlight Odyssey made me see the night in a whole new light. The experience was truly magical.',
    rating: 5, // Rating out of 5
  },
  {
    name: 'jennifer Smith',
    image: face2,
    quote: "I've never felt more connected to nature than during a Moonlight Odyssey adventure. It's a must-try!",
    rating: 4, // Rating out of 5
  },
  {
    name: 'Alice Johnson',
    image: face3,
    quote: "I was amazed by the night sky's beauty during my Moonlight Odyssey adventure. The stars felt so close, and the guides were fantastic. I'd highly recommend it!",
    rating: 5, // Rating out of 5
  },
  {
    name: 'David Lee',
    image: face4,
    quote: 'Moonlight Odyssey is the perfect escape from city life. The night sounds and the warmth of the campfire made it an unforgettable experience.',
    rating: 4, // Rating out of 5
  },
  {
    name: 'Emily Turner',
    image: face5,
    quote: 'The night adventure with Moonlight Odyssey rekindled my love for nature. I never knew the night held so much magic!',
    rating: 5, // Rating out of 5
  },
  {
    name: 'John Doe',
    image: face6,
    quote: 'My night adventure with Moonlight Odyssey was nothing short of enchanting. The nighttime wildlife encounters were awe-inspiring, and the stargazing left me in pure wonder.',
    rating: 5, // Rating out of 5
  }
  
  // Add more client reviews here
];

function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`text-xl ${i <= rating ? 'text-yellow-500' : 'text-gray-400'}`}>&#9733;</span>
    );
  }
  return stars;
}


 
  
  return (
    <div name='Reviews' className=' relative work panel py-10      bg-gray-100  w-full  dark:text-black text-black '>
     
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6 ">Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clientReviews.map((review, index) => (
          <figure key={index} className="bg-slate-100 rounded-xl p-8 dark:bg-black text-white">
          <img className="w-24 h-24 rounded-full mx-auto object-cover" src={review.image} alt="" width="384" height="512"/>
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
               {review.quote}
              </p>
            </blockquote>
            <figcaption >
              <div>
               {review.name}
              </div>
              <div className="text-center mt-4">{renderStars(review.rating)}</div>
             
            </figcaption>
          </div>
        </figure>
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default Reviews;
