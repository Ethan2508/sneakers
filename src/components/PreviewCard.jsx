import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const PreviewCard = ({ shoe }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [selectedSize, setSelectedSize] = useState(shoe.size_range[0]); // Définissez la taille initiale sur la première taille disponible
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isInCart = cart.some((item) => item.id === shoe.id && item.selectedSize === selectedSize);

  const handleCartAction = () => {
    if (isInCart) {
      dispatch(removeFromCart(shoe.id)); // Vous devrez ajuster cette logique pour gérer la taille
      toast.error("Retiré du panier");
    } else {
      dispatch(addToCart({ ...shoe, selectedSize }));
      toast.success("Ajouté au panier");
    }
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const img = shoe.original_picture_url;
  const price = (shoe.retail_price_cents / 100).toFixed(2);
  const desc = shoe.story_html;
  const name = shoe.name;
  const date = new Date(shoe.release_date).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const brand = shoe.brand_name;
  const gender = shoe.gender[0];

  return (
    <div className="flex flex-wrap md:flex-nowrap p-5">
      <div className="flex-1 flex justify-center items-center p-5">
        <img src={img} alt={name} className="w-full md:w-auto md:max-w-md h-auto object-cover rounded-lg" />
      </div>
      <div className="flex-1">
        <p className="text-xs uppercase text-gray-500">{brand} • {gender}</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-2">{name}</h2>
        <p className="text-xl font-semibold my-3">{price} €</p>
        <p className="text-xl font-semibold my-3">Année de sortie {date}</p>
        {/* Liste déroulante pour les tailles disponibles */}
        <div className="my-3">
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="p-2 rounded-md"
          >
            {shoe.size_range.map((size) => (
              <option key={size} value={size}>
                {size} US
              </option>
            ))}
          </select>
        </div>
        <div className="text-sm text-gray-600 my-4">
          {/* Affichage de la description */}
          <div dangerouslySetInnerHTML={{ __html: isDescriptionExpanded || desc.length <= 50 ? desc : `${desc.substring(0, 50)}...` }} />
          {!isDescriptionExpanded && desc.length > 50 && (
            <button onClick={toggleDescription} className="text-blue-500 pl-2 text-xs">
              Lire plus
            </button>
          )}
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleCartAction}
            className={`text-white ${isInCart ? 'bg-red-400 hover:bg-red-600' : 'bg-black hover:bg-gray-700'} focus:outline-none transition ease-in duration-200 uppercase text-sm font-bold tracking-wider px-6 py-3`}
          >
            {isInCart ? 'Retirer du panier' : 'Ajouter au panier'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
