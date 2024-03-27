import React from 'react';

import Card from "../components/Card";
import { data } from "../assets/data";
import RecommendationComponent from "./Recommendation"; // Renommez cet import pour éviter les conflits

const sneakers = data.sneakers;

const Recommendation = () => {
  const getRandomSneakers = () => {
    const sneakersCopy = [...sneakers];
    sneakersCopy.sort(() => 0.5 - Math.random());
    return sneakersCopy.slice(0, 3);
  };

  const randomSneakers = getRandomSneakers();

  return (
    <div className="flex flex-wrap justify-around"> {/* flex-wrap for responsiveness */}
      {randomSneakers.map((sneaker) => (
        <Card key={sneaker.id} sneaker={sneaker} /> // Assume Card is a separate component
      ))}
    </div>
  );
};

export default Recommendation;
