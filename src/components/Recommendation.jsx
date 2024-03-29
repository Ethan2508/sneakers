import React, { useState, useEffect } from 'react';
import Card from "../components/Card";
import { data } from "../assets/data";

const sneakers = data.sneakers;

const Recommendation = () => {
  const [randomSneakers, setRandomSneakers] = useState([]);

  useEffect(() => {
    const getRandomSneakers = () => {
      const sneakersCopy = [...sneakers];
      sneakersCopy.sort(() => 0.5 - Math.random());
      return sneakersCopy.slice(0, 3);
    };

    setRandomSneakers(getRandomSneakers());
  }, []); // Le tableau de dépendances vide assure que cela ne se produit qu'au montage du composant

  return (
    <div className="flex flex-wrap justify-around"> {/* flex-wrap for responsiveness */}
      {randomSneakers.map((sneaker) => (
        <Card key={sneaker.id} sneaker={sneaker} />
      ))}
    </div>
  );
};

export default Recommendation;
