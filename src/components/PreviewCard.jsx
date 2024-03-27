import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";

const PreviewCard = ({ shoe }) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isInCart = cart.some((item) => item.id === shoe.id);

  const handleCartAction = () => {
    if (isInCart) {
      dispatch(removeFromCart(shoe.id));
      toast.error("Retiré du panier");
    } else {
      dispatch(addToCart(shoe));
      toast.success("Ajouté au panier");
    }
  };

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const img = shoe.original_picture_url;
  // Supposons que le prix est stocké en centimes dans l'objet `shoe`
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
  const sizeRange = shoe.size_range.join(', ');

  // Obtenez un extrait de la description pour l'affichage initiale
  const displayDescription = isDescriptionExpanded || !desc
    ? desc
    : `${desc.substring(0, 50)}...`;

  return (
        <div className="flex flex-wrap md:flex-nowrap p-5">
          <div className="flex-1 flex justify-center items-center p-5">
            <img
              src={img}
              alt={name}
              className="w-full md:w-auto md:max-w-md h-auto object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase text-gray-500">{brand} • {gender}</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">{name}</h2>
            <p className="text-xl font-semibold my-3">{price} €</p>
            <p className="text-xl font-semibold my-3">Année de sortie {date}</p>
            <p className="text-xl font-semibold my-3">Tailles disponibles : {sizeRange}</p>
            <div className="text-sm text-gray-600 my-4">
              {isDescriptionExpanded || desc.length <= 50 ? (
                <span dangerouslySetInnerHTML={{ __html: displayDescription }} />
              ) : (
                <>
                  <span dangerouslySetInnerHTML={{ __html: `${desc.substring(0, 50)}...` }} />
                  <button onClick={toggleDescription} className="text-blue-500 pl-2 text-xs">
                    Lire plus
                  </button>
                </>
              )}</div>
            <div className="flex gap-4 mt-4">
              {isInCart ? (
                <button
                  onClick={handleCartAction}
                  className="text-white bg-red-500 hover:bg-red-600 focus:outline-none transition ease-in duration-200 uppercase text-sm font-bold tracking-wider px-6 py-3"
                >
                  Retirer du panier
                </button>
              ) : (
                <button
                  onClick={handleCartAction}
                  className="text-white bg-black hover:bg-gray-700 focus:outline-none transition ease-in duration-200 uppercase text-sm font-bold tracking-wider px-6 py-3"
                >
                  Ajouter au panier
                </button>
              )}
            </div>
          </div>
        </div>
      );
    };

    export default PreviewCard;
