import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { data } from "../assets/data";

const Explore = () => {
  const [sneakers, setSneakers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [brand, setBrand] = useState('');
  const [subBrands, setSubBrands] = useState([]);
  const [selectedSubBrand, setSelectedSubBrand] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    // Filtre les sneakers
    let filteredSneakers = data.sneakers
      .filter((s) => {
        return s.retail_price_cents !== null && s.story_html !== null &&
          s.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .filter((s) => {
        return brand === '' || s.brand_name.toLowerCase() === brand.toLowerCase();
      })
      .filter((s) => {
        return selectedSubBrand === '' || s.sub_brand.toLowerCase() === selectedSubBrand.toLowerCase();
      });

    // Tri les sneakers
    const sortedSneakers = sortOrder === 'asc' ?
      filteredSneakers.sort((a, b) => a.retail_price_cents - b.retail_price_cents) :
      filteredSneakers.sort((a, b) => b.retail_price_cents - a.retail_price_cents);

    setSneakers(sortedSneakers);
  }, [searchTerm, brand, selectedSubBrand, sortOrder]);

  // Lorsque l'utilisateur sélectionne une marque, met à jour les sous-marques disponibles
  useEffect(() => {
    if (brand) {
      const relatedSubBrands = data.sneakers
        .filter((s) => s.brand_name.toLowerCase() === brand.toLowerCase())
        .map((s) => s.sub_brand)
        .filter((subBrand, index, self) => subBrand && self.indexOf(subBrand) === index); // Uniquement les valeurs uniques

      setSubBrands(relatedSubBrands);
      setSelectedSubBrand(''); // Réinitialise la sous-marque sélectionnée
    } else {
      setSubBrands([]);
    }
  }, [brand]);

  // Réinitialise les sous-marques lors du chargement initial
  useEffect(() => {
    setSneakers(data.sneakers);
  }, []);

  return (
    <div>
      {/* Inputs de recherche et filtres */}
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <input
          type="text"
          placeholder="Recherche par nom..."
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
        >
          <option value="">Toutes les marques</option>
          {/* Liste des marques uniques */}
          {[...new Set(data.sneakers.map(item => item.brand_name))].sort().map((brandName) => (
            <option key={brandName} value={brandName}>
              {brandName}
            </option>
          ))}
        </select>
        {subBrands.length > 0 && (
          <select
            className="input input-bordered input-primary w-full max-w-xs"
            onChange={(e) => setSelectedSubBrand(e.target.value)}
            value={selectedSubBrand}
          >
            <option value="">Toutes les sous-marques</option>
            {subBrands.map((subBrandName) => (
              <option key={subBrandName} value={subBrandName}>
                {subBrandName}
              </option>
            ))}
          </select>
        )}
        <select
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="asc">Prix Croissant</option>
          <option value="desc">Prix Décroissant</option>
        </select>
      </div>
      {/* Affichage des cartes produits */}
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-10">
        {sneakers.map((shoe) => (
          <Card key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default Explore;